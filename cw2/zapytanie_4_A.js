printjson(db.people.aggregate([
 {$addFields: {bmi: {$multiply: [10000, {$divide: [{ $toDouble: "$weight" }, { $multiply: [{ $toDouble: "$height" }, { $toDouble: "$height" }]}]}]}}},
 {$group: {_id: "$nationality",
    minBMI: {$min: "$bmi"},
    maxBMI: {$max: "$bmi"},
    avgBMI: {$avg: "$bmi"}
   }
  }]));