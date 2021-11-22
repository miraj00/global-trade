const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();


  const categories = await Category.insertMany([
    { name: 'North America' },
    { name: 'South America' },
    { name: 'Europe' },
    { name: 'Africa' },
    { name: 'Asia' },
    { name: 'Australia' },
    { name: 'Antarctica' }
  ]);

  
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: ' Face Roller ',
      description:
        'Oil-Absorbing Volcanic Face Roller, Reusable Facial Skincare Tool ',
      image: 'Roller.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 500
    },
    {
      name: 'Nuts Box Gift Item',
      description:
        'Holiday Nuts Gift Basket in White Box (9 Piece Set) Thanksgiving Christmas Xmas',
      image: 'Nuts.jpg',
      category: categories[0]._id,
      price: 49.99,
      quantity: 200
    },
    {
      name: 'Winter-Coat',
      description:
        'Orolay Women Down Jacket with Removable Hood Winter Down Coat',
      image: 'Winter-Coat.jpg',
      category: categories[0]._id,
      price: 250.99,
      quantity: 500
    },
    {
      name: 'Air-Fryer',
      description:
        'GoWISE USA 3.7-Quart Programmable Air Fryer with 8 Cook Presets',
      image: 'Air-Fryer.jpg',
      category: categories[0]._id,
      price: 100.99,
      quantity: 500
    },
    {
      name: 'Nespresso Coffee',
      category: categories[1]._id,
      description:
        'Nespresso Capsules VertuoLine, Vanilla Custard Pie, Mild Roast Coffee',
      image: 'Nespresso.jpg',
      price: 47.99,
      quantity: 50
    },
    {
      name: 'Olive Oil',
      category: categories[1]._id,
      description:
        'The Governor Premium Extra Virgin Olive Oil - Unfiltered, Cold-Pressed, Single Origin Lianolia - Peppery, Robust, Floral, Fruity Notes',
      image: 'Oil.jpg',
      price: 39.99,
      quantity: 250
    },
    {
      name: 'Country Flags',
      category: categories[1]._id,
      description:
        'Central and South America World Flag SET-20 Polyester 4"x6" Flags',
      image: 'Flags.jpg',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'Painted Gecko',
      category: categories[1]._id,
      description:
        'Global Crafts 8" Painted Gecko Recycled Haitian Metal Wall Art Blue Green',
      image: 'Gecko.jpg',
      price: 23.99,
      quantity: 100
    },
    {
      name: 'Chocolates Collection',
      category: categories[2]._id,
      description:
        'European Chocolates, Candy, Cookies, 25 Count Variety International Snacks',
      image: 'Chocolates.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Wine Glasses',
      category: categories[2]._id,
      description:
        'JoyJolt White Wine Glasses – Claire Collection 11.4 Ounce Wine Glasses Set of 2 – Deluxe Crystal Glasses with Ultra-Elegant Design',
      image: 'Wine-Glasses.jpg',
      price: 29.99,
      quantity: 30
    },
  
    {
      name: 'Biscotti Cookies',
      category: categories[2]._id,
      description:
        'Gusta Authentic Biscotti Cookies Made in Tuscany, Italy - Classic Almond',
      image: 'Biscotti.jpg',
      price: 34.50,
      quantity: 300
    },
    {
      name: 'Italian Coin',
      category: categories[2]._id,
      description:
        'Historical Carved Italy Coins-Great Europe Coins from Italy ',
      image: 'Coin.jpg',
      price: 9.99,
      quantity: 130
    },
    {
      name: 'Hand Woven Coat from Africa',
      category: categories[3]._id,
      description:
        'Full-Length Mud Cloth Coat: Alt Collar',
      image: 'Coat.jpeg',
      price: 129.99,
      quantity: 100
    },
    {
      name: 'Sculpture for Decor',
      category: categories[3]._id,
      description:
        'Leekung African Statues and Sculptures for Home Decor,African Figurines Head Statue Decorations for Home,African Art Sculpture',
      image: 'Sculpture.jpg',
      price: 200.00,
      quantity: 100
    },
    {
      name: 'Wild Elephant Wall Canvas Print',
      category: categories[3]._id,
      description:
        'Wild Elephant at Sunset Wall Art Canvas Print Beige Animal Walking on African Plains Painting Picture Artwork for Living Room Decor',
      image: 'Elephant-Canvas.jpg',
      price: 80.44,
      quantity: 100
    },
    {
      name: 'Fountain with LED Lights',
      category: categories[3]._id,
      description:
        ' Golden Tiered Bowl Fountain with Color Changing LED Lights with Adapter ',
      image: 'Fountain.jpg',
      price: 49.99,
      quantity: 100
    },
    {
      name: 'Bell',
      description:
        'Decorative Bell: Russia. Moscow. Coat of Arms of Russian Empire (Copper Color)',
      image: 'Bell-Russia.jpg',
      category: categories[4]._id,
      price: 15.59,
      quantity: 200
    },
    {
      name: 'Faberge Egg',
      description:
        'Decorative Blue Faberge Egg Russian Swan Handmade Unique Gift',
      image: 'Faberge-Egg.jpg',
      category: categories[4]._id,
      price: 49.99,
      quantity: 50
    },
    {
      name: 'Tota Bird',
      description:
        'Tota Bird Bell Door Hanging Traditional Indian Hanging Decoration by Mango Gifts India ',
      image: 'Tota-Bird.jpg',
      category: categories[4]._id,
      price: 35.99,
      quantity: 120
    },
    {
      name: 'Buddhist Angels',
      description:
        'Sawadee Buddhist Thai Angels Bronze Teppanom Kneeling Namaste Statues in Pair Handmade Artefact from Southeast Asia Chiang Mai Thailand ',
      image: 'Buddhist-Angels.jpg',
      category: categories[4]._id,
      price: 150.99,
      quantity: 20
    },
    {
      name: 'Wool-Duster',
      category: categories[5]._id,
      description:
        'Dusting Products Premium Australian Lambs Wool Duster Wand with Free Extender Pole',
      image: 'Wool-Australia.jpg',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Tea Light Candle Holder',
      category: categories[5]._id,
      description:
        'Tea Light Candle Holder, Hand Turned Made from The Australian Banksia Seed Pod',
      image: 'Tea-Light-Candle.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Room Divider Screen',
      category: categories[5]._id,
      description:
        ' Room Divider Screen Partition Sunset Over The City of Gold Coast Looking from',
      image: 'Divider-Screen.jpg',
      price: 199.99,
      quantity: 100
    },
    {
      name: 'Opera House Poster',
      category: categories[5]._id,
      description:
        'Sydney Opera House Australia - NEW World Travel Poster ',
      image: 'Opera-House.jpg',
      price: 29.99,
      quantity: 600
    },
    {
      name: 'Ice Bucket',
      category: categories[6]._id,
      description:
        'Antarctica Acrylic Ice Bucket, 9.25" by Mario Luca Giusti',
      image: 'Ice-Bucket.jpg',
      price: 140.99,
      quantity: 100
    },
    {
      name: 'Swan Faucet',
      category: categories[6]._id,
      description:
        'Antarctica Swan widespread Bathroom Widespread Faucet With Swarovski Crystals',
      image: 'Swan-Faucet.jpg',
      price: 329.99,
      quantity: 600
    },
    {
      name: 'Polar Bear Canvas Print',
      category: categories[6]._id,
      description:
        'Polar bear, animal kingdom, south pole, antarctic wildlife, north pole №1830 Ready to Hang Canvas Print ',
      image: 'Canvas-Print.jpg',
      price: 199.99,
      quantity: 100
    },
    {
      name: 'jacket from Antarctica',
      category: categories[6]._id,
      description:
        'Tough Duck Antarctica Down Fill Parka Jacket',
      image: 'Jacket.jpg',
      price: 29.99,
      quantity: 600
    },

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
