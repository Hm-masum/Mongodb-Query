// *** $unset (remove element) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")}, {$unset: {birthday : 1}})


// *** $pop (last element remove) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")},{$pop:{friends:1}})


// *** $pop (first element remove) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")},{$pop:{friends: -1}})


// *** $pull (remove specific elements) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")},{$pull: {friends: "Sakina"}})


// *** $pullAll (remove greater than specific elements) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")},{$pullAll: { friends:["Hasina", "Rokiya"] } } )


// *** $inc (increment of value) ***
db.test.updateOne({"_id" : ObjectId("6406ad64fc13ae5a4000008a")} , {$inc:{age: 1}})


// *** $deleteOne ***
db.test.deleteOne({"_id" : ObjectId("6406ad63fc13ae5a40000066")})


// *** createCollection (create new collection) ***
db.createCollection("posts")


// *** $drop(delete collection) ***
db.posts.drop( { writeConcern: { w: 1 } } )
























