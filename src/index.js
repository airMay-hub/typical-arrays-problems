exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
}

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return array.reduce((x, y) => (x + y)) / array.length;
    }
}