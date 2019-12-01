"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var data = fs.readFileSync('input01.txt', 'utf8');
var array = data.split("\n");
var total = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i]) {
        total = total + calc(Number(array[i]));
    }
}
console.log(total);
var total2 = 0;
var num = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i]) {
        num = calc(Number(array[i]));
        while (num > 0) {
            total2 = total2 + num;
            num = calc(Number(num));
        }
    }
}
console.log(total2);
function calc(x) {
    var num = 0;
    if (x > 0) {
        num = (Math.floor(Number(x) / 3) - 2);
    }
    return num;
}
//# sourceMappingURL=app.js.map