printjson(db.people.find({"birth_date":{"$gte":"1999-12-31"}}, {"first_name":1, "last_name":1, "location.city":1}));