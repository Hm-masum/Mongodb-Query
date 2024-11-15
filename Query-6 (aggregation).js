
// *** $unwind ***
db.test.aggregate([
    // stage 1
    {$unwind: "$friends"},
    // stage 2
    {$group: {
        _id: "$friends", 
        count:{$sum:1} 
    }}
])
db.test.aggregate([
    {$unwind: "$interests"},
    {$group: {
        _id: "$age", 
        interestsPerAge: {$push: "$interests"}
    }}
])



// *** $bucket (boundary) ***
db.test.aggregate([
    {$bucket: {
        groupBy:"$age",
        boundaries: [20,40,60,80],
        default: "greater than 80",
        output:{count:{$sum:1}, name:{$push:"$name"}}
    }}
])



// *** $sort (sorting) ***
db.test.aggregate([
    {$bucket: {
        groupBy:"$age",
        boundaries: [20,40,60,80],
        default: "greater than 80",
        output:{count:{$sum:1}, name:{$push:"$name"}}
    }},
    {$sort:{count : -1}}
])



// *** $limit (sorting) ***
db.test.aggregate([
    {$bucket: {
        groupBy:"$age",
        boundaries: [20,40,60,80],
        default: "greater than 80",
        output:{count:{$sum:1}, name:{$push:"$name"}}
    }},
    {$sort:{count : -1}},
    {$limit:2}
])



// *** $facet (multiple pipeline) ***
db.test.aggregate([
    {$facet:{
        // pipeline-1
        "friendsCount":[
            // stage-1
            {$unwind: "$friends"},
            // stage-2
            {$group:{_id:"$friends", count:{$sum:1}}}
        ],
        // pipeline-2
        "educationCount":[
            // stage-1
            {$unwind: "$education"},
            // stage-2
            {$group:{_id:"$education", count:{$sum:1}}}
        ],
        // pipeline-3
        "skillsCout":[
            // stage-1
            {$unwind: "$skills"},
            // stage-2
            {$group:{_id:"$skills", count:{$sum:1}}}
        ],
    }}
])



// *** $lookup (join data between two collection) ***
db.orders.aggregate([
    {$lookup:{
        from: "test",
        localField:"userId",
        foreignField:"_id",
        as:"user"
    }}
])        



// *** indexing ***
db.massive.createIndex({email:1})
db.massive.createIndex({gender:-1,age:1})



// *** remove indexing ***
db.massive.dropIndex({email:1})
db.massive.dropIndex({gender:-1,age:1})



// *** text indexing ***
db.massive.createIndex({about: "text"})
db.massive.find({$text: { $search: "dolor" }})



