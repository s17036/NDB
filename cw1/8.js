printjson(
var cityUpdate=db.people.findMany({"location.city":"Moscow"})
cityUpdate.location.city="Moskwa"
db.people.updateMany({"location.city":"Moscow"}, cityUpdate)
);