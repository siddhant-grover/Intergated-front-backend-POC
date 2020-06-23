const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL='mongodb://localhost/Ecomm_App'
const database='Ecomm_App'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{

    if(error){
       return  console.log(error)
    }
   const db = client.db(database)
   db.collection('products').insertMany([{
    
    name: 'Milk Packet',
    countInStock:12,
    category: 'Dairy',
    image: '/images/I1.jpg',
    price: 50,
    brand: 'Verka',
    rating: 4.2,
    numReviews: 5,
    description:'nice'
   },
   {
    name: 'Cheese Packet',
    countInStock:10,
    category: 'Dairy',
    image: '/images/I2.jpg',
    price: 70,
    brand: 'Amul',
    rating: 4.2,
    numReviews: 5,
    description:'nice'
   },
   {
    
    name: '1kg Carrots',
    countInStock:12,
    category: 'Vegetables',
    image: '/images/I3.jpg',
    price: 25,
    brand: 'Organica',
    rating: 4.2,
    numReviews: 5,
    description:'nice'
   },
   {
    
    name: '1kg Onion',
    countInStock:12,
    category: 'Vegetables',
    image: '/images/I4.jpg',
    price: 30,
    brand: 'Organica',
    rating: 4.2,
    numReviews: 5,
    description:'nice'
   },
   {
    
    name: '1kg Apples',
    countInStock:20,
    category: 'Fruits',
    image: '/images/I5.jpg',
    price: 25,
    brand: 'Organica',
    rating: 4.2,
    numReviews: 5,
    description:'nice'
   },
   {
    
    name: '1kg Mangoes',
    countInStock:20,
    category: 'Fruits',
    image: '/images/I6.jpg',
    price: 100,
    brand: 'Organica',
    rating: 4.9,
    numReviews: 5,
    description:'nice'
   }

])
   db.collection('users').insertOne({
    
    isAdmin: true,
    name:'Siddhant',
    email: 'siddhantgroverboss@gmail.com',
    password: '1234'
   })

})