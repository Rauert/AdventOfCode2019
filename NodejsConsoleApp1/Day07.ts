﻿//import * as fs from 'fs';
//import * as path from 'path';

//let input: number[] = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
//let input: number[] = [2, 3, 0, 3, 99];

//Part 1
//calcD7(1);
//calcD7(5);

var largest: number = 0;
var inputSignal: number;

let perms: number[][] = (perm([0, 1, 2, 3, 4]));
for (let p = 0; p < perms.length; p++) {
    inputSignal = 0;
    for (let i = 0; i < 5; i++) {
        inputSignal = calcD7(perms[p][i], inputSignal);
    }
    if (inputSignal > largest) {
        largest = inputSignal;
    }
}
console.log(largest);

function calcD7(phaseSetting: number, inputSignal: number): number {
    let input: number[] = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99];
    //let input: number[] = [3, 31, 3, 32, 1002, 32, 10, 32, 1001, 31, -2, 31, 1007, 31, 0, 33, 1002, 33, 7, 33, 1, 33, 31, 31, 1, 32, 31, 31, 4, 31, 99, 0, 0, 0];

    var pos: number = 0;
    var opCode: number[] = calcOpCode2(input[0]);

    var x: number;
    var y: number;
    var z: number;

    var inputVal: number = phaseSetting;

    var outputVal: number;

    //console.log(input[225]);

    while (opCode[0] != 99) {
        if (opCode[0] == 1 || opCode[0] == 2) {
            //Set vars
            if (opCode[1] == 0) {
                x = input[input[pos + 1]];
            }
            else {
                x = input[pos + 1];
            }
            if (opCode[2] == 0) {
                y = input[input[pos + 2]];
            }
            else {
                y = input[pos + 2];
            }
            if (opCode[3] == 1) {
                console.log("Writable instruction 1!! " + pos + opCode);
                process.exit(-1);
            }

            if (opCode[0] == 1) { //+
                input[input[pos + 3]] = x + y;
            }
            else { //*
                input[input[pos + 3]] = x * y;
            }
            pos += 4;
        }
        else if (opCode[0] == 3) {
            if (opCode[1] == 1) {
                console.log("Writable instruction 1!! " + pos + opCode);
                process.exit(-1);
            }
            input[input[pos + 1]] = inputVal;
            inputVal = inputSignal;
            pos += 2;
        }
        else if (opCode[0] == 4) {
            if (opCode[1] == 0) {
                x = input[input[pos + 1]];
            }
            else {
                x = input[pos + 1];
            }
            //console.log(x);
            outputVal = x;
            pos += 2;
        }
        else if (opCode[0] == 5 || opCode[0] == 6) {
            if (opCode[1] == 0) {
                x = input[input[pos + 1]];
            }
            else {
                x = input[pos + 1];
            }
            if (opCode[2] == 0) {
                y = input[input[pos + 2]];
            }
            else {
                y = input[pos + 2];
            }

            if (opCode[0] == 5) {
                if (x != 0) {
                    pos = y;
                }
                else {
                    pos += 3;
                }
            }
            else {
                if (x == 0) {
                    pos = y;
                }
                else {
                    pos += 3;
                }
            }
        }
        else if (opCode[0] == 7 || opCode[0] == 8) {
            //Set vars
            if (opCode[1] == 0) {
                x = input[input[pos + 1]];
            }
            else {
                x = input[pos + 1];
            }
            if (opCode[2] == 0) {
                y = input[input[pos + 2]];
            }
            else {
                y = input[pos + 2];
            }
            if (opCode[3] == 1) {
                console.log("Writable instruction 1!! " + pos + opCode);
                process.exit(-1);
            }
            z = 0;
            if (opCode[0] == 7) { //<
                if (x < y) {
                    z = 1;
                }
            }
            else { //==
                if (x == y) {
                    z = 1;
                }
            }
            input[input[pos + 3]] = z;
            pos += 4;
        }
        else {
            console.log("UNEXPECTED OPCODE " + opCode);
            process.exit(-1);
        }
        //console.log(input);
        //console.log("225: "  + input[225]);
        opCode = calcOpCode2(input[pos]);
    }

    return outputVal;
}

//console.log(calcD7P2([9, 8, 7, 6, 5]));
//console.log(calcD7P2([9, 7, 8, 5, 6]));

largest = 0;

perms = (perm([5, 6, 7, 8, 9]));
for (let p = 0; p < perms.length; p++) {
    inputSignal = calcD7P2(perms[p]);
    if (inputSignal > largest) {
        largest = inputSignal;
    }
}
console.log(largest);
function calcD7P2(phaseSetting: number[]): number {
    //let inp: number[] = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99];
    //let inp: number[] = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5];
    //let inp: number[] = [3, 52, 1001, 52, -5, 52, 3, 53, 1, 52, 56, 54, 1007, 54, 5, 55, 1005, 55, 26, 1001, 54,-5, 54, 1105, 1, 12, 1, 53, 54, 53, 1008, 54, 0, 55, 1001, 55, 1, 55, 2, 53, 55, 53, 4,53, 1001, 56, -1, 56, 1005, 56, 6, 99, 0, 0, 0, 0, 10];
    //let input: number[][] = [[3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5],
    //    [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5],
    //    [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5],
    //    [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5],
    //    [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5]];

    let input: number[][] = [[3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99],
        [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99],
        [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99],
        [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99],
        [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 42, 55, 64, 77, 94, 175, 256, 337, 418, 99999, 3, 9, 102, 4, 9, 9, 1001, 9, 5, 9, 102, 2, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 101, 5, 9, 9, 4, 9, 99, 3, 9, 102, 5, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99]];

    var pos: number[] = [0, 0, 0, 0, 0];
    var phaseSettingSet: boolean[] = [false, false, false, false, false];
    var opCode: number[] = calcOpCode2(input[0][0]);

    var x: number;
    var y: number;
    var z: number;

    var inputVal: number = 0;
    var outputVal: number;

    var curr: number = 0;

    //console.log(input[225]);
    var next: boolean = false;

    while (opCode[0] != 99) {
        //console.log(curr + " inst " + pos[curr]);
        if (opCode[0] == 1 || opCode[0] == 2) {
            //Set vars
            if (opCode[1] == 0) {
                x = input[curr][input[curr][pos[curr] + 1]];
            }
            else {
                x = input[curr][pos[curr] + 1];
            }
            if (opCode[2] == 0) {
                y = input[curr][input[curr][pos[curr] + 2]];
            }
            else {
                y = input[curr][pos[curr] + 2];
            }
            if (opCode[3] == 1) {
                console.log("Writable instruction 1!! " + pos + opCode);
                process.exit(-1);
            }

            if (opCode[0] == 1) { //+
                input[curr][input[curr][pos[curr] + 3]] = x + y;
            }
            else { //*
                input[curr][input[curr][pos[curr] + 3]] = x * y;
            }
            pos[curr] += 4;
        }
        else if (opCode[0] == 3) { //In
            if (opCode[1] == 1) {
                console.log("Writable instruction 1!! " + pos + opCode);
                process.exit(-1);
            }
            if (!phaseSettingSet[curr]) {
                input[curr][input[curr][pos[curr] + 1]] = phaseSetting[curr];
                phaseSettingSet[curr] = true;
                //console.log("Setting " + curr);
            }
            else {
                input[curr][input[curr][pos[curr] + 1]] = inputVal;
            }
            pos[curr] += 2;
        }
        else if (opCode[0] == 4) { //Out
            if (opCode[1] == 0) {
                x = input[curr][input[curr][pos[curr] + 1]];
            }
            else {
                x = input[curr][pos[curr] + 1];
            }
            //console.log(x);
            outputVal = x;
            inputVal = outputVal;
            next = true;
            pos[curr] += 2;
            //console.log(inputVal);
        }
        else if (opCode[0] == 5 || opCode[0] == 6) {
            if (opCode[1] == 0) {
                x = input[curr][input[curr][pos[curr] + 1]];
            }
            else {
                x = input[curr][pos[curr] + 1];
            }
            if (opCode[2] == 0) {
                y = input[curr][input[curr][pos[curr] + 2]];
            }
            else {
                y = input[curr][pos[curr] + 2];
            }

            if (opCode[0] == 5) {
                if (x != 0) {
                    pos[curr] = y;
                }
                else {
                    pos[curr] += 3;
                }
            }
            else {
                if (x == 0) {
                    pos[curr] = y;
                }
                else {
                    pos[curr] += 3;
                }
            }
        }
        else if (opCode[0] == 7 || opCode[0] == 8) {
            //Set vars
            if (opCode[1] == 0) {
                x = input[curr][input[curr][pos[curr] + 1]];
            }
            else {
                x = input[curr][pos[curr] + 1];
            }
            if (opCode[2] == 0) {
                y = input[curr][input[curr][pos[curr] + 2]];
            }
            else {
                y = input[curr][pos[curr] + 2];
            }
            if (opCode[3] == 1) {
                console.log("Writable instruction 1!! " + pos[curr] + opCode);
                process.exit(-1);
            }
            z = 0;
            if (opCode[0] == 7) { //<
                if (x < y) {
                    z = 1;
                }
            }
            else { //==
                if (x == y) {
                    z = 1;
                }
            }
            input[curr][input[curr][pos[curr] + 3]] = z;
            pos[curr] += 4;
        }
        else {
            console.log("UNEXPECTED OPCODE " + opCode);
            process.exit(-1);
        }
        //console.log(input);
        //console.log("225: "  + input[225]);
        if (next) {
            next = false;
            curr++;
            curr = curr % 5;
            //console.log(curr);
        }
        opCode = calcOpCode2(input[curr][pos[curr]]);
    }

    return outputVal;
}

function calcOpCode2(opCodeFull: number): number[] {
    var opCodeString: string = String(opCodeFull);

    let opCode: number[] = [Number(opCodeString.substr(opCodeString.length - 2, 2)), 0, 0, 0];
    if (opCodeString.length > 2) {
        var j: number = 1;
        for (var i = opCodeString.length - 3; i >= 0; i--) {
            opCode[j] = Number(opCodeString[i]);
            j++;
        }
    }
    //console.log(opCodeFull);
    //console.log(opCode);
    return opCode;
}


function perm(xs: any[]):any[][] {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret;
}
