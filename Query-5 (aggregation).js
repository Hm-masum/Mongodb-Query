
// *** $match (check condition) ***
db.test.aggregate([
    //stage 1 
    { $match: { gender: "Male", age: { $lt:30 } } },
    //stage 2
    { $project:{name:1, age:1, gender:1}}
])
db.test.aggregate([
    //stage 1 
    { $match: { gender: "Male" } },
    { $match: { age: { $lt:30 } } },
    //stage 2
    { $project:{name:1, age:1, gender:1}}
])



// *** $addFields (added new field in duplicate data) ***
db.test.aggregate([
    //stage 1 
    { $match: { gender: "Male" } },
    // stage 2
    { $addFields: {course: "Level-2", eduTech: "programming-hero"}},
    // stage 3
    { $project:{gender:1,course:1,eduTech: 1}},
])



// *** $out (creats new collection) ***
db.test.aggregate([
    //stage 1 
    { $match: { gender: "Male" } },
    // stage 2
    { $addFields: {course: "Level-2", eduTech: "programming-hero"}},
    // stage 3
    { $project:{gender:1,course:1,eduTech: 1}},
    // stage 4
    { $out: "course_student"}
])



// *** $marge (marge new field in orginal data) ***
db.test.aggregate([
    //stage 1 
    { $match: { gender: "Male" } },
    // stage 2
    { $addFields: {course: "Level-2", eduTech: "programming-hero"}},
    // stage 3
    // { $project:{gender:1,course:1,eduTech: 1}},
    // stage 4
    { $merge: "test"}
])



// *** $group (grouping based on gender) ***
db.test.aggregate([
    // stage 1
    {$group: {_id:"$gender"}}
])



// *** $sum (grouping and summing based on country) ***
db.test.aggregate([
    // stage 1
    {$group: {_id:"$address.country", count: {$sum:1} } }
])



// *** $push (grouping and showing person name based on country) ***
db.test.aggregate([
    // stage 1
    {$group: {_id:"$address.country", count:{$sum:1}, name: {$push:"$name"} } }
])



// *** $$ROOT (showing whole object after grouping) ***
db.test.aggregate([
    // stage 1
    {$group: {_id:"$address.country", count:{$sum:1}, fullDoc: {$push:"$$ROOT"} } }
])
db.test.aggregate([
    // stage 1
    {$group: {_id:"$address.country", count:{$sum:1}, fullDoc: {$push:"$$ROOT"} } },
    // stage 2
    {$project:{"fullDoc.name":1, "fullDoc.email":1, "fullDoc.birthday":1 }}
])



// *** $max,$min,$avg ***
db.test.aggregate([
    // stage 1
    {$group: {_id:null, 
              totalSalary: {$sum:"$salary"}, 
              maxSalary:{$max:"$salary"}, 
              minSalary:{$min:"$salary"},
              avgSalary:{$avg:"$salary"}
        }
    },
    // stage 2
    {$project:{
        totalSalary:1,
        minSalary:1,
        maxSalary:1,
        averageSalary: "$avgSalary",
        rangeBetweenMaxAndMin: {$subtract: ["$maxSalary","$minSalary"]}
    }}
])

