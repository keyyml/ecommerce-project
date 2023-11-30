from flask import Flask, make_response, request
from models import db, Product
from config import app

@app.route('/products', methods = ['GET'])
def products():
    if request.method == 'GET':
        products = Product.query.all()
        return make_response([product.to_dict() for product in products], 200)
    
@app.route('/products/<int:id>', methods = ['GET'])
def product_by_id(id):
    if request.method == 'GET':
        products = Product.query.filter_by(id = id).all()
        return make_response([product.to_dict() for product in products],200)