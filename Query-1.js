// *** Data Insert ***
db.test.insertOne({name: "something"})
db.test.insertMany([{ name: "complete web deb" }, { name: "PHP laravel" }])


// *** Data Find ***
db.test.findOne({age:17})
db.test.findOne({company:"Demimbu"})
db.test.find({gender: "Male"})


// *** fill filtering ***
db.test.findOne({gender: "Male"},{name:1})
db.test.find({gender: "Male"},{gender:1})
db.test.find({gender:"Male"},{gender:1, name:1})
db.test.find({gender:"Male"},{gender:1, name:1, email:1})
db.test.find({gender: "Male"}).project({name:1,gender:1,email:1})
 
 
// *** $eq(equal) operator ***
db.test.findOne({gender: {$eq: "Male"}})
db.test.find({gender: {$eq: "Male"}})
db.test.find({age: {$eq: 12}})


// *** $ne(not equal) operator ***
db.test.find({age: {$ne: 12}})


// *** $gt(greater than) operator ***
db.test.find({age: {$gt: 30}})


// *** $gte(greater than equal) operator ***
db.test.find({age: {$gte:30}}).sort({age: 1})


// *** $lt(less than) operator ***
db.test.find({age: {$lt:30}})


// *** $lte(less than equal) operator ***
db.test.find({age: {$lte:30}})