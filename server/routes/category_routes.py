from flask import Flask, make_response, request
from models import db, Category, ProductCategory
from config import app

@app.route('/categories', methods = ['GET'])
def categories():
    if request.method == 'GET':
        categories = Category.query.all()
        return make_response([category.to_dict() for category in categories],200)

@app.route('/categories/<int:id>', methods = ['GET'])
def category_by_id(id):
    if request.method == 'GET':
        categories = Category.query.filter_by(id = id).all()
        return make_response([category.to_dict() for category in categories],200)
    
@app.route('/product_categories', methods = ['GET'])
def product_categories():
    if request.method == 'GET':
        product_categories = ProductCategory.query.all()
        return make_response([product_category.to_dict() for product_category in product_categories],200)

@app.route('/product_categories/<int:id>', methods = ['GET'])
def product_category_by_id(id):
    if request.method == 'GET':
        product_categories = ProductCategory.query.filter_by(id = id).all()
        return make_response([product_category.to_dict() for product_category in product_categories],200)