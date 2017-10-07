// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({ "firstName": "David", "lastName": "Riggs", "dateBirth" : ISODate("1988-02-25T12: 00: 00.000Z"), "address" : { "streetAddress": "5789 Awesome ST", "city" : "Oakland", "state" : "FL", "postalCode": "33309" } })
db.users.insertOne({ "firstName": "Guillermo", "lastName": "Santos", "dateBirth" : ISODate("1987-12-02T12: 00: 00.000Z"), "address" : { "streetAddress": "101 killer RD", "city" : "Coral Springs", "state" : "FL", "postalCode": "33312" } })
db.users.insertOne({ "firstName": "Ana", "lastName": "Peralta", "dateBirth" : ISODate("1993-07-07T12: 00: 00.000Z"), "address" : { "streetAddress": "1000 Dont know ST", "city" : "Dave", "state" : "FL", "postalCode": "33065" } })

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({ "name" : "Tom Brady Jersey", "description" : "Tom Brady SuperBowl Jersey", "category" : "New Items", "price" : 150.00, } )
db.products.insertOne({ "name" : "Dead Pool Glasses", "description" : "Dead Pool Red Mirrors", "category" : "New Items", "price" : 60.00, } )
db.products.insertOne({ "name" : "Ear Rings", "description" : "Diamond 18K", "category" : "New Items", "price" : 110.00, } )

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne( {"firstName": "David"}, { $set: {"shoppingCart": [     ObjectId("59a2ee0ecba0844d07f49d48"),     ObjectId("59a3ee97cba0844d07f49d49")   ]}} )

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category": "New Items"})


// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"name" : "Giants Jersey"})

// PASTE REVIEW QUERY HERE
db.products.updateOne({"name" : "Tom Brady SuperBowl Jersey"}, {$set: {"reviews": [{"name": "Tom Brady", "comment": "I am the GOAT! Best Jersey of all time!","stars": 5, "date": "2017-8-10T18 :28: 09.369Z"}]}})
