
// *** $all Operator ***
db.test.find({"interests.2": "Cooking"}).project({interests: 1})
db.test.find({interests: ["Cooking","Writing","Reading"]}).project({interests: 1})
db.test.find({interests: {$all: ["Cooking","Writing","Reading"] }}).project({interests: 1})
db.test.find({"skills.name" : "JAVASCRIPT"}).project({skills: 1})
db.test.find({"skills.name" : "JAVASCRIPT","skills.level":"Intermidiate"}).project({skills: 1})


// *** $elemMatch Operator ***
db.test.find({ skills: {$elemMatch: {name: 'JAVASCRIPT',"level":"Intermidiate"}}}).project({skills: 1})


// *** $set(WHole field update) Operator ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$set:{age: 80}})
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$set:{age: 80}})
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$set:{interests: ["Gaming","Reading","Cooking"]}})


// *** $addToSet(just one value modified) Operator ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$addToSet:{interests: "Gaming"}})


// *** $addToSet and $each (greater than one value modified) Operator ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$addToSet:{interests: { $each: ["Gaming","Reading"]}}})


// *** $push and $each (greater than one value insert) Operator ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$push:{interests: { $each: ["Gaming","Reading"]}}})
