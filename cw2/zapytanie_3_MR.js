var mapFunc = function () {
    emit(this.job, 1);
};

var reduceFunc = function (key, val) {

    return 1;

};
printjson(db.people.mapReduce(
    mapFunc,
    reduceFunc,
    {
        out: { inline: 1 },
    }
));