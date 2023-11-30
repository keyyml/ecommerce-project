from app import app
from models import db, User, Product, Review, Order, OrderItem, Category, ProductCategory

if __name__ == '__main__':
    with app.app_context():

        User.query.delete()
        Product.query.delete()
        Review.query.delete()
        Order.query.delete()
        OrderItem.query.delete()
        Category.query.delete()
        ProductCategory.query.delete()

        # seed 3 users
        users_to_add = []

        users_to_add.append(User(
            id = 1,
            first_name = "Jenny",
            last_name = "Lopez",
            password = "p4$$w0rd",
            email = "jenny123@gmail.com"
        ))

        users_to_add.append(User(
            id = 2,
            first_name = "Carl",
            last_name = "Davidson",
            password = "xsecurexpasswordx",
            email = "carl123@gmail.com"
        ))

        users_to_add.append(User(
            id = 3,
            first_name = "Vicky",
            last_name = "Smith",
            password = "abcABC",
            email = "vicky123@gmail.com"
        ))

        db.session.add_all(users_to_add)
        db.session.commit()

        products_to_add = []

        products_to_add.append(Product(
            id = 1,
            name = "Putty Blush",
            color = "Shade: Turks and Caicos",
            price = 7.99,
            brand = "e.l.f.",
            image = "URL"

        ))

        products_to_add.append(Product(
            id = 2,
            name = "The Chocolates Eyeshadow Palette",
            color = "Shades Row 1: Crater Brown, Beaver, English Walnut Row 2: Crown of Thorns, Di Serria, Roman Coffee",
            price = 12.99,
            brand = "Juvia's Place",
            image = "URL"
        ))

        products_to_add.append(Product(
            id = 3,
            name = "Goof Proof Waterproof Easy Shape & Fill Eyebrow Pencil",
            color = "Shade: 3.5 Natural Medium Brown",
            price = 26.00,
            brand = "Benefit Cosmetics",
            image = "URL"
        ))

        products_to_add.append(Product(
            id = 4,
            name = "Rosemary Mint Scalp & Hair Strengthening Oil",
            color = "none",
            price = 7.69,
            brand = "Mielle",
            image = "URL"
        ))

        products_to_add.append(Product(
            id = 5,
            name = "No.7 Bonding Oil",
            color = "none",
            price = 30.00,
            brand = "OLAPLEX",
            image = "URL"
        ))

        products_to_add.append(Product(
            id = 6,
            name = "Ceramide Retinol + HPR Rapid Skin Renewing Water Cream",
            color = "none",
            price = 92.00,
            brand = "Elizabeth Arden",
            image = "URL"
        ))

        products_to_add.append(Product(
            id = 7,
            name = "Moisturizing Cream with Hyaluronic Acid for Balanced to Dry Skin",
            color = "none",
            price = 17.99,
            brand = "CeraVe",
            image = "URL"
        ))

        db.session.add_all(products_to_add)
        db.session.commit()

        reviews_to_add = []

        reviews_to_add.append(Review(
            id = 1,
            product_id = 2,
            user_id = 3,
            rating = 7,
            comment = "I Loved this product it made my routine so much better!"
        ))

        reviews_to_add.append(Review(
            id = 2,
            product_id = 1,
            user_id = 2,
            rating = 9,
            comment = "The shades are amazing!"
        ))

        reviews_to_add.append(Review(
            id = 3,
            product_id = 3,
            user_id = 1,
            rating = 8,
            comment = "This is such a great addition to my makeup collection!"
        ))

        db.session.add_all(reviews_to_add)
        db.session.commit()

        orders_to_add = []

        orders_to_add.append(Order(
            id = 1,
            user_id = 2,
            status = "open"
        ))

        orders_to_add.append(Order(
            id = 2,
            user_id = 1,
            status = "open"
        ))

        orders_to_add.append(Order(
            id = 3,
            user_id = 3,
            status = "open"
        ))

        db.session.add_all(orders_to_add)
        db.session.commit()

        order_items_to_add = []

        order_items_to_add.append(OrderItem(
            id = 1,
            order_id = 1,
            product_id = 1,
            quantity = 1
        ))

        order_items_to_add.append(OrderItem(
            id = 2,
            order_id = 1,
            product_id = 2,
            quantity = 1
        ))

        db.session.add_all(order_items_to_add)
        db.session.commit()

        categories_to_add = []

        categories_to_add.append(Category(
            id = 1,
            name = "Face",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 2,
            name = "Eye",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 3,
            name = "Lip",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 4,
            name = "Cheek",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 5,
            name = "Makeup Palettes",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 6,
            name = "Skin Care",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 7,
            name = "Hair Care",
            description = "null"
        ))

        categories_to_add.append(Category(
            id = 8,
            name = "Makeup",
            description = "null"
        ))

        db.session.add_all(categories_to_add)
        db.session.commit()

        product_categories_to_add = []

        product_categories_to_add.append(ProductCategory(
            id = 1,
            product_id = 1,
            category_id = 4
        ))

        product_categories_to_add.append(ProductCategory(
            id = 2,
            product_id = 2,
            category_id = 2
        ))

        product_categories_to_add.append(ProductCategory(
            id = 3,
            product_id = 2,
            category_id = 5
        ))

        product_categories_to_add.append(ProductCategory(
            id = 4,
            product_id = 3,
            category_id = 2
        ))

        product_categories_to_add.append(ProductCategory(
            id = 5,
            product_id = 1,
            category_id = 8
        ))

        product_categories_to_add.append(ProductCategory(
            id = 6,
            product_id = 2,
            category_id = 8
        ))

        product_categories_to_add.append(ProductCategory(
            id = 7,
            product_id = 3,
            category_id = 8
        ))

        product_categories_to_add.append(ProductCategory(
            id = 8,
            product_id = 4,
            category_id = 7
        ))

        product_categories_to_add.append(ProductCategory(
            id = 9,
            product_id = 5,
            category_id = 7
        ))

        product_categories_to_add.append(ProductCategory(
            id = 10,
            product_id = 6,
            category_id = 6
        ))

        product_categories_to_add.append(ProductCategory(
            id = 11,
            product_id = 7,
            category_id = 6
        ))

        db.session.add_all(product_categories_to_add)
        db.session.commit()