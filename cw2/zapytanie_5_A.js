printjson(db.people.aggregate([{$match: {"nationality": "Poland", "sex":"Female"}}, {$unwind: "$credit"}, {$group: {_id: "$credit.currency", sum: {$sum: {$toDouble: "$credit.balance"}}, avg: {$avg: {$toDouble: "$credit.balance"}}}}]));