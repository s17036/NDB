var mapFunc = function () {
    for (var i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance));
    }
};

var reduceFunc = function (id, balance) {
    return Array.sum(balance);

};
printjson(db.people.mapReduce(
    mapFunc,
    reduceFunc,
    {
        out: { inline: 1 },
    }
));