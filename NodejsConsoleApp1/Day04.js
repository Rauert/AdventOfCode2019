//import * as fs from 'fs';
//import * as path from 'path';
var min = 156218;
var max = 652527;
//Part 1
var count = 0;
var count2 = 0;
var curr;
var currChar;
var currChar2;
var validInc;
var validDouble;
var validP2;
var currSplit;
for (let i = min; i <= max; i++) {
    curr = String(i);
    validInc = 1;
    validDouble = 0;
    currChar = Number(curr.charAt(0));
    for (var j = 1; j < curr.length; j++) {
        currChar2 = Number(curr.charAt(j));
        if (currChar > currChar2) {
            validInc = 0;
        }
        if (currChar == currChar2) {
            validDouble = 1;
        }
        currChar = currChar2;
    }
    if (validInc == 1 && validDouble == 1) {
        count++;
        currSplit = curr.match(/(.)\1*/g);
        validP2 = 0;
        for (var k = 0; k < currSplit.length; k++) {
            if (currSplit[k].length == 2) {
                validP2 = 1;
            }
        }
        if (validP2 == 1) {
            count2++;
        }
    }
}
console.log(count);
console.log(count2);
//# sourceMappingURL=Day04.js.map