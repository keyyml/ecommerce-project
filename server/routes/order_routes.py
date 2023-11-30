from flask import Flask, make_response, request
from models import db, Order, OrderItem
from config import app

@app.route('/orders', methods = ['GET'])
def orders():
    if request.method == 'GET':
        orders = Order.query.all()
        return make_response([order.to_dict() for order in orders],200)

@app.route('/orders/<int:id>', methods = ['GET'])
def order_by_id(id):
    if request.method == 'GET':
        orders = Order.query.filter_by(id = id).all()
        return make_response([order.to_dict() for order in orders],200)
    
@app.route('/order_items', methods = ['GET'])
def order_items():
    if request.method == 'GET':
        order_items = OrderItem.query.all()
        return make_response([order_item.to_dict() for order_item in order_items],200)

@app.route('/order_items/<int:id>', methods = ['GET'])
def order_item_by_id(id):
    if request.method == 'GET':
        order_items = OrderItem.query.filter_by(id = id).all()
        return make_response([order_item.to_dict() for order_item in order_items],200)