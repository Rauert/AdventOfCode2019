import * as fs from 'fs';
import * as path from 'path';

var data: string = fs.readFileSync('input01.txt','utf8');

var array: string[] = data.split("\n");
var total: number = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i]) {
        total = total + calc(Number(array[i]));
    }
}
console.log(total);

var total2: number = 0;
var num: number = 0;
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


function calc(x: number): number {
    var num: number = 0;
    if (x > 0) {
        num = (Math.floor(Number(x) / 3) - 2);
    }
    return num;
}