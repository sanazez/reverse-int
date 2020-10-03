module.exports = function reverse(n) {
    let str = n + '';
    if (str.includes('-')) {
        return Number(str.slice(1).split('').reverse().join(''));
    } else {
        let arr = str.split('');
        return Number(arr.reverse().join(''));
    }
}