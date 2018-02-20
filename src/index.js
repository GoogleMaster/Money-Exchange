// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency <= 0) return {};
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var obj = {};
    if (Math.floor(currency/50) > 0){
        obj.H = Math.floor(currency/50);
        currency = currency - obj.H * 50;
    }
    if (Math.floor(currency/25) > 0){
        obj.Q = Math.floor(currency/25);
        currency = currency - obj.Q * 25;
    }
    if (Math.floor(currency/10) > 0){
        obj.D = Math.floor(currency/10);
        currency = currency - obj.D * 10;
    }
    if (Math.floor(currency/5) > 0){
        obj.N = Math.floor(currency/5);
        currency = currency - obj.N * 5;
    }
    if (currency > 0){
        obj.P = currency;
        //currency = currency - obj.P * 1;
    }
    return obj;
}
