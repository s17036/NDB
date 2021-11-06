var mapFunction = function () {
    emit(
        this.sex,
        {
            average: parseFloat(this.weight), count: 1
        }
    );
};

var reduceFunction = function (id, info) {
    let sum = 0
    let count = 0
    info.forEach(function (doc) {
        count += doc.count;
        sum += doc.average;
    });
    return { average: sum, count: count };

};
var finalizeFunction = function (id, info) {
    let output = info.average / info.count
    return { average: output, count: info.count };

};

printjson(
    db.people.mapReduce(
        mapFunction,
        reduceFunction,
        {
            finalize: finalizeFunction,
            out: { inline: 1 },
        })
);