// *** Implicit and *** 
db.test.find({age : {$gt:18, $lt:30 }},{age:1})
db.test.find({age : {$gte:18, $lte:30 }},{age:1})
db.test.find({gender:"Female" ,age : {$gte:18, $lte:30 }},{age:1,gender:1})
db.test.find({gender:"Female" ,age : {$ne:15, $lte:30 }},{age:1,gender:1})


// *** $in operator *** 
db.test.find({gender:"Female", age: {$in: [18,20,22,24,26]}},{age:1})
db.test.find({"skills.name": {$in:["JAVASCRIPT","PYTHON"]} }).project({"skills.name":1})


// *** $nin operator *** 
db.test.find({gender:"Female", age:{$nin:[18,20,22,24,26]}},{age:1})
db.test.find({gender:"Female", age:{$nin:[18,20,22,24,26]}, interests:"Cooking"},{age:1, interests:1})
db.test.find({gender:"Female", age:{$nin:[18,20,22,24,26]}, interests:{$in: ["Cooking","Gaming"]}},{age:1, interests:1})


// *** explicit and ***
db.test.find({ $and: [{ age: { $ne: 15 } }, { age: { $lte: 14 } }, {gender:"Female"}] }, {gender:1,age:1})


// *** explicit or ***
db.test.find({ $or: [{interests:"Traveling"},{interests:"Cooking"}] }, {gender:1,interests:1})
db.test.find({ $or: [ {"skills.name":"JAVASCRIPT"}, {"skills.name":"PYTHON"} ]}).project({"skills.name":1})


// *** explicit nor ***
 db.test.find({ $nor: [{interests:"Traveling"},{interests:"Cooking"}] }, {gender:1,interests:1})


// *** $exists operator ***
db.test.find({ age:{$exists: true}}).project({age: 1})
db.test.find({ age:{$exists: false}}).project({age: 1})


// *** $type operator ***
db.test.find({age: {$type: "string"}}).project({age: 1})
db.test.find({friends: {$type: "array"}}).project({friends: 1})
db.test.find({company: {$type: "null"}}).project({company: 1})


// *** $field operator ***
db.test.find({friends: {$size: 0}}).project({friends: 1})

