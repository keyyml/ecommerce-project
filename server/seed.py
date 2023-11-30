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
            image = "https://i.ibb.co/3v4GWST/blush.jpg"

        ))

        products_to_add.append(Product(
            id = 2,
            name = "The Chocolates Eyeshadow Palette",
            color = "Shades Row 1: Crater Brown, Beaver, English Walnut Row 2: Crown of Thorns, Di Serria, Roman Coffee",
            price = 12.99,
            brand = "Juvia's Place",
            image = "https://i.ibb.co/vHNpG77/juviaeye.png"
        ))

        products_to_add.append(Product(
            id = 3,
            name = "Goof Proof Waterproof Easy Shape & Fill Eyebrow Pencil",
            color = "Shade: 3.5 Natural Medium Brown",
            price = 26.00,
            brand = "Benefit Cosmetics",
            image = "https://i.ibb.co/vqYRv7D/goof.png"
        ))

        products_to_add.append(Product(
            id = 4,
            name = "Rosemary Mint Scalp & Hair Strengthening Oil",
            color = "2.0 oz",
            price = 7.69,
            brand = "Mielle",
            image = "https://i.ibb.co/whg41H5/mielle.png"
        ))

        products_to_add.append(Product(
            id = 5,
            name = "No.7 Bonding Oil",
            color = "1.0 oz",
            price = 30.00,
            brand = "OLAPLEX",
            image = "https://i.ibb.co/Dw4QvLp/ola.png"
        ))

        products_to_add.append(Product(
            id = 6,
            name = "Ceramide Retinol + HPR Rapid Skin Renewing Water Cream",
            color = "1.7 oz",
            price = 92.00,
            brand = "Elizabeth Arden",
            image = "https://i.ibb.co/YBv5K75/earden.png"
        ))

        products_to_add.append(Product(
            id = 7,
            name = "Moisturizing Cream with Hyaluronic Acid for Balanced to Dry Skin",
            color = "16.0 oz",
            price = 17.99,
            brand = "CeraVe",
            image = "https://i.ibb.co/LkKrxjn/cerave.png"
        ))

        products_to_add.append(Product(
            id = 8,
            name = "All Nighter Waterproof Makeup Setting Spray",
            color = "4.0 oz",
            price = 36.00,
            brand = "Urban Decay",
            image = "https://i.ibb.co/FzxQd5g/ud.png"
        ))

        products_to_add.append(Product(
            id = 9,
            name = "Pro Filt'r Soft Matte Longwear Liquid Foundation",
            color = "Shade: 445 Size: 1.08 oz",
            price = 40.00,
            brand = "FENTY BEAUTY",
            image = "https://i.ibb.co/M8zmL1P/fb1.png"
        ))

        products_to_add.append(Product(
            id = 10,
            name = "Pro Filt'r Soft Matte Longwear Liquid Foundation",
            color = "Color: Fairly Light 03 Size: 0.28 oz",
            price = 38.00,
            brand = "bareMinerals",
            image = "https://i.ibb.co/RDgXhs1/foundation.png"
        ))
        
        products_to_add.append(Product(
            id = 11,
            name = "Pro Filt'r Soft Matte Longwear Liquid Foundation",
            color = "Shade: 420 Size: 1.08 oz",
            price = 40.00,
            brand = "FENTY BEAUTY",
            image = "https://i.ibb.co/px4K9dQ/fb2.png"
        ))

        products_to_add.append(Product(
            id = 12,
            name = "Pro Filt'r Soft Matte Longwear Liquid Foundation",
            color = "Shade: 260 Size: 1.08 oz",
            price = 40.00,
            brand = "FENTY BEAUTY",
            image = "https://i.ibb.co/CWFSmCd/fb3.png"
        ))
        
        products_to_add.append(Product(
            id = 13,
            name = "Invite Only Mini Afterglow Liquid Blush Set",
            color = "Size: 0.11 oz Shades: ORGASM (Peachy pink with golden shimmer) ORGASM RUSH (Rosy bronze) DOLCE VITA (Dusty rose)",
            price = 31.50,
            brand = "NARS",
            image = "https://i.ibb.co/7Y3zsb3/blsset.png"
        ))

        products_to_add.append(Product(
            id = 14,
            name = "Infallible 24H Fresh Wear Soft Matte Blush",
            color = "Shade: 10 Confident Pink",
            price = 15.99,
            brand = "L'Oreal",
            image = "https://i.ibb.co/gv7Rwgw/bls3.png"
        ))

        products_to_add.append(Product(
            id = 15,
            name = "Glow Reviver Lip Oil",
            color = "Color: Pink Quartz (light pink)",
            price = 8.00,
            brand = "e.l.f.",
            image = "https://i.ibb.co/rxPRzSc/2615649.jpg"
        ))

        products_to_add.append(Product(
            id = 16,
            name = "Glow Reviver Lip Oil",
            color = "Color: Honey Talks (brown-beige)",
            price = 8.00,
            brand = "e.l.f.",
            image = "https://i.ibb.co/xDD3s29/26156502.png"
        ))

        products_to_add.append(Product(
            id = 17,
            name = "Maneater Mascara",
            color = "Color: Black",
            price = 25.00,
            brand = "Tarte",
            image = "https://i.ibb.co/FJbyjF3/memas.png"
        ))

        products_to_add.append(Product(
            id = 18,
            name = "Calm It Facial Care Discovery Kit",
            color = "Fresh Farmacy Facial Soap (1.7 oz) Ultrabland Facial Cleanser (1.5 oz) Eau Roma Water Toner (3.3 oz)",
            price = 46.00,
            brand = "LUSH",
            image = "https://i.ibb.co/YQGMvF3/lush.png"
        ))

        products_to_add.append(Product(
            id = 19,
            name = "Oil Control Deep Pore Charcoal Cleanser",
            color = "Size: 6.77 oz",
            price = 8.99,
            brand = "Biore",
            image = "https://i.ibb.co/pdR7PjP/biore.png"
        ))

        products_to_add.append(Product(
            id = 20,
            name = "Special Edition Airwrap Multi-Styler Complete Long in Blue Blush",
            color = "Re-engineered attachments harness Enhanced Coanda airflow for faster, better and easier styling.",
            price = 499.99,
            brand = "Dyson",
            image = "https://i.ibb.co/6WjKbRk/dyson.png"
        ))

        products_to_add.append(Product(
            id = 21,
            name = "No.6 Bond Smoother",
            color = "Size: 3.3 oz",
            price = 30.00,
            brand = "OLAPLEX",
            image = "https://i.ibb.co/bdwRPWr/25929909.png"
        ))

        products_to_add.append(Product(
            id = 22,
            name = "ULTRA DEFINING GEL Strong Hold No-Crunch Styler",
            color = "Size: 12.0 oz",
            price = 32.00,
            brand = "DevaCurl",
            image = "https://i.ibb.co/NW66D4m/25819023.png"
        ))

        products_to_add.append(Product(
            id = 23,
            name = "WAVE MAKER Lightweight Moisturizing Definer",
            color = "Size: 5.0 oz",
            price = 34.00,
            brand = "DevaCurl",
            image = "https://i.ibb.co/gWkptdN/dcurl.png"
        ))

        products_to_add.append(Product(
            id = 24,
            name = "Mighty Patch Original Acne Pimple Patches",
            color = "36 ct",
            price = 12.99,
            brand = "Hero.",
            image = "https://i.ibb.co/3MHQ4Qb/patches.png"
        ))

        products_to_add.append(Product(
            id = 25,
            name = "Niacinamide 10% + Zinc 1% Oil Control Serum",
            color = "Size: 1.0 oz",
            price = 6.00,
            brand = "The Ordinary",
            image = "https://i.ibb.co/kcvnkz2/ordi.png"
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
            product_id = 2,
            user_id = 2,
            rating = 10,
            comment = "I Loved this shade!"
        ))
        reviews_to_add.append(Review(
            id = 3,
            product_id = 2,
            user_id = 1,
            rating = 4,
            comment = "Too hard to blend.."
        ))

        reviews_to_add.append(Review(
            id = 4,
            product_id = 1,
            user_id = 2,
            rating = 9,
            comment = "The shades are amazing!"
        ))

        reviews_to_add.append(Review(
            id = 5,
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

        product_categories_to_add.append(ProductCategory(
            id = 12,
            product_id = 8,
            category_id = 8
        ))

        product_categories_to_add.append(ProductCategory(
            id = 13,
            product_id = 13,
            category_id = 8
        ))

        product_categories_to_add.append(ProductCategory(
            id = 14,
            product_id = 14,
            category_id = 8
        ))
        product_categories_to_add.append(ProductCategory(
            id = 15,
            product_id = 15,
            category_id = 8
        ))
        product_categories_to_add.append(ProductCategory(
            id = 16,
            product_id = 16,
            category_id = 8
        ))
        product_categories_to_add.append(ProductCategory(
            id = 17,
            product_id = 17,
            category_id = 8
        ))
        product_categories_to_add.append(ProductCategory(
            id = 18,
            product_id = 18,
            category_id = 6
        ))
        product_categories_to_add.append(ProductCategory(
            id = 19,
            product_id = 19,
            category_id = 6
        ))
        product_categories_to_add.append(ProductCategory(
            id = 20,
            product_id = 20,
            category_id = 7
        ))
        product_categories_to_add.append(ProductCategory(
            id = 21,
            product_id = 21,
            category_id = 7
        ))
        product_categories_to_add.append(ProductCategory(
            id = 22,
            product_id = 22,
            category_id = 7
        ))
        product_categories_to_add.append(ProductCategory(
            id = 23,
            product_id = 23,
            category_id = 7
        ))
        product_categories_to_add.append(ProductCategory(
            id = 24,
            product_id = 24,
            category_id = 6
        ))
        product_categories_to_add.append(ProductCategory(
            id = 25,
            product_id = 25,
            category_id = 6
        ))



        db.session.add_all(product_categories_to_add)
        db.session.commit()