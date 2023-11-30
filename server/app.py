from config import app
from routes.user_routes import users, user_by_id, register, login, logout, profile
from routes.review_routes import reviews, review_by_id
from routes.product_routes import products, product_by_id
from routes.order_routes import orders, order_by_id, order_item_by_id, order_items
from routes.category_routes import categories, product_categories, product_category_by_id, category_by_id

@app.route('/')
def home():
    return ''

# run python app.py
if __name__ == '__main__':
    app.run(port=5555, debug=True)