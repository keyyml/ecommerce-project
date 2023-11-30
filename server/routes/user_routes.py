from models import db, User, Product, Order, OrderItem
from config import app, login_manager
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, url_for, redirect, jsonify, make_response
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user, login_required


@app.route('/users', methods = ['GET'])
def users():
    if request.method == 'GET':
        users = User.query.all()
        return make_response([user.to_dict() for user in users],200)

@app.route('/users/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def user_by_id(id):
    user = User.query.filter_by(id = id).first()
    if user is None:
        response = {"errors": ["validation errors"]}
        return make_response(response, 403)
    elif request.method == 'GET':
        return make_response(user.to_dict(), 200)
    elif request.method == 'PATCH':
        form_data = request.get_json()
        try:
            for attr in form_data:
                setattr(user, attr, form_data.get(attr))
            db.session.commit()
            return make_response(user.to_dict(), 200)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 403)
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return make_response({}, 200)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/profile", methods = ['GET'])
@login_required
def profile():
    if request.method == 'GET':
        return make_response(current_user.to_dict(), 200)


@app.route('/register', methods=["POST"])
def register():
    if request.method == "POST":
        data = request.get_json()
        user = User(email=data['email'], password=data['password'], first_name=data['first_name'], last_name=data['last_name'])
        db.session.add(user)
        db.session.commit()

        open_order = Order(status='open', user=user)
        db.session.add(open_order)
        db.session.commit()
        
        return jsonify(message="Registration successful")

@app.route("/login", methods=['GET', "POST"])
def login():
    if request.method == "POST":
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if user and user.password == data['password']:
            login_user(user)
            return jsonify(message="Login successful")
        return jsonify(message="Login failed"), 401
    if current_user.is_authenticated:
        return jsonify(message="GET successful")
    
    return jsonify(message="NO user")
    


@app.route("/logout")
def logout():
    if current_user.is_authenticated:
        logout_user()
        return jsonify(message="Logout successful")
    else:
        return jsonify(message="Logout unavailable")
    
    
@app.route('/add_to_order/<int:product_id>', methods=['POST'])
@login_required
def add_to_order(product_id):
    user = current_user
    product = Product.query.get(product_id)

    if product:
        open_order = Order.query.filter(Order.user == user, Order.status == 'open').first()

        if not open_order:
            open_order = Order(status='open', user=user)
            db.session.add(open_order)
            db.session.commit()

        quantity = request.json.get('quantity', 1)
        existing_item = OrderItem.query.filter_by(order_id=open_order.id, product_id=product.id).first()

        if existing_item:
            existing_item.quantity += quantity
        else:
            order_item = OrderItem(quantity=1, product=product, order=open_order)
            db.session.add(order_item)

        db.session.commit()

        return jsonify(message="Product added to order successfully"), 200
    else:
        return jsonify(message="Product not found"), 404

    
@app.route('/checkout', methods=['GET'])
@login_required
def checkout():
    user = current_user
    open_order = Order.query.filter(Order.user == user, Order.status == 'open').first()

    if open_order:
        total_price = sum(item.product.price * item.quantity for item in open_order.order_items)

        response_data = {
            'order_id': open_order.id,
            'total_price': total_price,
            'items': [
                {
                    'product': item.product.to_dict(),
                    'quantity': item.quantity
                }
                for item in open_order.order_items
            ]
        }

        return jsonify(response_data), 200
    else:
        return jsonify(message="No open order found"), 404
    
@app.route('/update_quantity/<int:product_id>', methods=['POST'])
@login_required
def update_quantity(product_id):
    new_quantity = request.json.get('quantity', 1)

    order_item = OrderItem.query.filter_by(product_id=product_id).first()
    if order_item:
        order_item.quantity = new_quantity
        db.session.commit()
        return jsonify(message="Quantity updated successfully"), 200
    else:
        return jsonify(message="Item not found"), 404

@app.route('/remove_item/<int:product_id>', methods=['POST'])
@login_required
def remove_item(product_id):
    order_item = OrderItem.query.filter_by(product_id=product_id).first()
    if order_item:
        db.session.delete(order_item)
        db.session.commit()

        return jsonify(message="Item removed successfully"), 200
    else:
        return jsonify(message="Item not found"), 404


if __name__ == "__main__":
    app.run()
    
    