from flask import Flask, make_response, request
from models import db, Review
from config import app

@app.route('/reviews', methods = ['GET'])
def reviews():
    if request.method == 'GET':
        reviews = Review.query.all()
        return make_response([review.to_dict() for review in reviews], 200)
    
@app.route('/reviews/<int:id>', methods = ['GET'])
def review_by_id(id):
    if request.method == 'GET':
        reviews = Review.query.filter_by(id = id).all()
        return make_response([review.to_dict() for review in reviews],200)