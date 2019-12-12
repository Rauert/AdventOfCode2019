//import * as fs from 'fs';
//import * as path from 'path';
//let input: number[] = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
//let input: number[] = [2, 3, 0, 3, 99];
//Part 1
calcD9(1);
calcD9(5);
//Part 2
//for (let x = 0; x < 100; x++) {
//    for (let y = 0; y < 100; y++) {
//        if (calc(x, y) == 19690720) {
//            console.log((x*100)+y);
//        }
//    }
//}
function calcD9(id) {
    let input = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1102, 79, 14, 225, 1101, 17, 42, 225, 2, 74, 69, 224, 1001, 224, -5733, 224, 4, 224, 1002, 223, 8, 223, 101, 4, 224, 224, 1, 223, 224, 223, 1002, 191, 83, 224, 1001, 224, -2407, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 223, 224, 223, 1101, 18, 64, 225, 1102, 63, 22, 225, 1101, 31, 91, 225, 1001, 65, 26, 224, 101, -44, 224, 224, 4, 224, 102, 8, 223, 223, 101, 3, 224, 224, 1, 224, 223, 223, 101, 78, 13, 224, 101, -157, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 3, 224, 1, 224, 223, 223, 102, 87, 187, 224, 101, -4698, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 4, 224, 1, 223, 224, 223, 1102, 79, 85, 224, 101, -6715, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 2, 224, 1, 224, 223, 223, 1101, 43, 46, 224, 101, -89, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 1, 224, 224, 1, 223, 224, 223, 1101, 54, 12, 225, 1102, 29, 54, 225, 1, 17, 217, 224, 101, -37, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 3, 224, 1, 223, 224, 223, 1102, 20, 53, 225, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 329, 101, 1, 223, 223, 1108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 344, 101, 1, 223, 223, 7, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 359, 101, 1, 223, 223, 108, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 374, 101, 1, 223, 223, 8, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 389, 101, 1, 223, 223, 1108, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 404, 101, 1, 223, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 419, 101, 1, 223, 223, 8, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 434, 1001, 223, 1, 223, 1008, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 449, 1001, 223, 1, 223, 1008, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 464, 101, 1, 223, 223, 1107, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 479, 101, 1, 223, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 494, 1001, 223, 1, 223, 1107, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 509, 101, 1, 223, 223, 1108, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 524, 101, 1, 223, 223, 7, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 539, 101, 1, 223, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 554, 101, 1, 223, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 569, 1001, 223, 1, 223, 1008, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 584, 101, 1, 223, 223, 107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 599, 1001, 223, 1, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 614, 101, 1, 223, 223, 1007, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 629, 101, 1, 223, 223, 1107, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 644, 101, 1, 223, 223, 108, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 659, 101, 1, 223, 223, 1007, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 674, 101, 1, 223, 223, 4, 223, 99, 226];
    var iDict = {};
    for (var i = 0; i < input.length; i++) {
        iDict[i] = input[i];
    }
    var pos = 0;
    var opCode = calcOpCode3(iDict[0]);
    var relativeBase = 0;
    var x;
    var y;
    var z;
    while (opCode[0] != 99) {
        if (opCode[0] == 1 || opCode[0] == 2) { // +/*
            //Set vars
            x = getVal(iDict, pos, 1, opCode[1], relativeBase, false);
            y = getVal(iDict, pos, 2, opCode[2], relativeBase, false);
            z = getVal(iDict, pos, 3, opCode[3], relativeBase, true);
            if (opCode[0] == 1) { //+
                iDict[iDict[pos + 3]] = x + y;
            }
            else { //*
                iDict[iDict[pos + 3]] = x * y;
            }
            pos += 4;
        }
        else if (opCode[0] == 3) { // Input
            z = getVal(iDict, pos, 1, opCode[1], relativeBase, true);
            iDict[iDict[pos + 1]] = id;
            pos += 2;
        }
        else if (opCode[0] == 4) { // Output
            x = getVal(iDict, pos, 1, opCode[1], relativeBase, false);
            console.log(x);
            pos += 2;
        }
        else if (opCode[0] == 5 || opCode[0] == 6) { //Jumps
            x = getVal(iDict, pos, 1, opCode[1], relativeBase, false);
            y = getVal(iDict, pos, 2, opCode[2], relativeBase, false);
            if (opCode[0] == 5) { //Jump if true
                if (x != 0) {
                    pos = y;
                }
                else {
                    pos += 3;
                }
            }
            else {
                if (x == 0) { //Jump if false
                    pos = y;
                }
                else {
                    pos += 3;
                }
            }
        }
        else if (opCode[0] == 7 || opCode[0] == 8) {
            x = getVal(iDict, pos, 1, opCode[1], relativeBase, false);
            y = getVal(iDict, pos, 2, opCode[2], relativeBase, false);
            z = getVal(iDict, pos, 3, opCode[3], relativeBase, true);
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
            iDict[iDict[pos + 3]] = z;
            pos += 4;
        }
        else {
            console.log("UNEXPECTED OPCODE " + opCode);
            process.exit(-1);
        }
        rangeCheck(iDict, pos);
        opCode = calcOpCode3(iDict[pos]);
    }
}
function getVal(iDict, pos, offset, opCode, relativeBase, writable) {
    var rtn;
    if (writable && opCode == 1) {
        console.log("Writable instruction 1!! at " + pos);
        process.exit(-1);
    }
    if (opCode == 0) {
        rangeCheck(iDict, pos + offset);
        rangeCheck(iDict, iDict[pos + offset]);
        rtn = iDict[iDict[pos + offset]];
    }
    else if (opCode == 2) {
        rangeCheck(iDict, pos + offset + relativeBase);
        rangeCheck(iDict, iDict[pos + offset + relativeBase]);
        rtn = iDict[iDict[pos + offset + relativeBase]];
    }
    else { //1 - value
        rangeCheck(iDict, pos + 1);
        rtn = iDict[pos + 1];
    }
    return rtn;
}
function rangeCheck(iDict, val) {
    if (!iDict[val]) {
        iDict[val] = 0;
    }
}
function calcOpCode3(opCodeFull) {
    var opCodeString = String(opCodeFull);
    let opCode = [Number(opCodeString.substr(opCodeString.length - 2, 2)), 0, 0, 0];
    if (opCodeString.length > 2) {
        var j = 1;
        for (var i = opCodeString.length - 3; i >= 0; i--) {
            opCode[j] = Number(opCodeString[i]);
            j++;
        }
    }
    //console.log(opCodeFull);
    // console.log(opCode);
    return opCode;
}
//# sourceMappingURL=Day09.js.map