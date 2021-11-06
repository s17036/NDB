var mapFunc = function () {
    if (this.sex === "Female", this.nationality === "Poland")
        for (var i = 0; i < this.credit.length; i++) {
            balance = parseFloat(this.credit[i].balance)
            emit(this.credit[i].currency, {
                sum: balance,
                average: balance,
                count: 1,
            });
        };
}
var reduceFunc = function (id, balances) {
    let sum = 0
    let count = 0
    let average = 0
    balances.forEach(function (balance) {
        count += balance.count;
        sum += balance.sum;
    });

    return {
        sum: sum,
        average: sum / count,
        count: count,
    }
};
var finalizeFunc = function (key, val) {
    return {
        sum: val.sum,
        average: val.sum / val.count,
    }
};
printjson(db.people.mapReduce(
    mapFunc,
    reduceFunc,
    {
        finalize: finalizeFunc,
        out: { inline: 1 },
    }
));