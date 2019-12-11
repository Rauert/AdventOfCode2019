"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var data = fs.readFileSync('input10.txt', 'utf8');
var array = data.split("\n");
var coords = Array();
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i].charAt(j) == "#") {
            coords.push([j, i]);
        }
    }
}
//console.log(coords);
var x;
var y;
var gradiant;
var best = 0;
var bc = [0, 0];
var total;
for (var c = 0; c < coords.length; c++) {
    let q1 = new Set();
    let q2 = new Set();
    let q3 = new Set();
    let q4 = new Set();
    let l1 = new Set();
    let l2 = new Set();
    let l3 = new Set();
    let l4 = new Set();
    //console.log("");
    //console.log(coords[c]);
    //console.log("");
    for (var d = 0; d < coords.length; d++) {
        if (!(coords[c][0] == coords[d][0] && coords[c][1] == coords[d][1])) {
            x = (coords[d][0] - coords[c][0]);
            y = (coords[d][1] - coords[c][1]);
            gradiant = x / y;
            if (x == 0 || y == 0) {
                gradiant = 0;
            }
            //console.log("orig: " + coords[d]);
            //console.log("offset: " + "[ " + x + ", " + y + " ]");
            //console.log("gr: " + gradiant);
            //console.log("");
            //if (x == 0 && y > 0) {
            //    l1.add(gradiant);
            //}
            if (x >= 0 && y > 0) {
                q1.add(gradiant);
            }
            //else if (x > 0 && y == 0) {
            //    l2.add(gradiant);
            //}
            else if (x > 0 && y <= 0) {
                q2.add(gradiant);
            }
            //else if (x == 0 && y < 0) {
            //    l3.add(gradiant);
            //}
            else if (x <= 0 && y < 0) {
                q3.add(gradiant);
            }
            //else if (x < 0 && y == 0) {
            //    l4.add(gradiant);
            //}
            else if (x < 0 && y >= 0) {
                q4.add(gradiant);
            }
            else {
                console.log("ERROR" + x + " " + y);
            }
        }
    }
    //console.log("");
    total = (q1.size + q2.size + q3.size + q4.size + l1.size + l2.size + l3.size + l4.size);
    if (total > best) {
        best = total;
        bc = [coords[c][0], coords[c][1]];
    }
}
console.log(best);
//console.log(bc);
//Part 2
let q1 = new Set();
let q2 = new Set();
let q3 = new Set();
let q4 = new Set();
//let l1 = new Set();
//let l2 = new Set();
//let l3 = new Set();
//let l4 = new Set();
var q1d = {};
var q2d = {};
var q3d = {};
var q4d = {};
//var l1d: number[][] = Array();
//var l2d: number[][] = Array();
//var l3d: number[][] = Array();
//var l4d: number[][] = Array();
total = 0;
for (var d = 0; d < coords.length; d++) {
    if (!(bc[0] == coords[d][0] && bc[1] == coords[d][1])) {
        total++;
        x = (coords[d][0] - bc[0]);
        y = (coords[d][1] - bc[1]);
        gradiant = Math.abs(x / y);
        if (x == 0) {
            gradiant = 0;
        }
        if (y == 0) {
            gradiant = 100.0;
        }
        //if (x == 0 && y > 0) {
        //    l1.add(gradiant);
        //    l1d.push([x, y]);
        //}
        if (x > 0 && y >= 0) {
            q2.add(gradiant);
            if (!q2d[gradiant]) {
                q2d[gradiant] = [[x, y]];
            }
            else {
                q2d[gradiant].push([x, y]);
            }
        }
        //else if (x > 0 && y == 0) {
        //    l2.add(gradiant);
        //    l2d.push([x, y]);
        //}
        else if (x >= 0 && y < 0) {
            q1.add(gradiant);
            if (!q1d[gradiant]) {
                q1d[gradiant] = [[x, y]];
            }
            else {
                q1d[gradiant].push([x, y]);
            }
        }
        //else if (x == 0 && y < 0) {
        //    l3.add(gradiant);
        //    l3d.push([x, y]);
        //}
        else if (x < 0 && y <= 0) {
            q4.add(gradiant);
            if (!q4d[gradiant]) {
                q4d[gradiant] = [[x, y]];
            }
            else {
                q4d[gradiant].push([x, y]);
            }
        }
        //else if (x < 0 && y == 0) {
        //    l4.add(gradiant);
        //    l4d.push([x, y]);
        //}
        else if (x <= 0 && y > 0) {
            q3.add(gradiant);
            if (!q3d[gradiant]) {
                q3d[gradiant] = [[x, y]];
            }
            else {
                q3d[gradiant].push([x, y]);
            }
        }
        else {
            console.log("ERROR" + x + " " + y);
        }
    }
}
//console.log(q1);
//console.log(q2);
//console.log(q3);
//console.log(q4);
//console.log("tot:" + total);
//Sort sets to get order of destruction
var q1a = Array.from(q1).sort(sortArray);
var q2a = Array.from(q2).sort(sortArray).reverse();
var q3a = Array.from(q3).sort(sortArray);
var q4a = Array.from(q4).sort(sortArray).reverse();
//q3a.reverse;
//q4a.reverse;
total = 0;
//console.log(q1a);
//console.log(q1a[0]);
//console.log("");
for (var i = 0; i < q1a.length; i++) {
    //console.log(q1a[i]);
    //console.log(q1d[q1a[i]]);
    q1d[q1a[i]] = q1d[q1a[i]].sort(sortSet);
    //console.log(q1d[q1a[i]]);
    total += q1d[q1a[i]].length;
}
//console.log("");
for (var i = 0; i < q2a.length; i++) {
    q2d[q2a[i]] = q2d[q2a[i]].sort(sortSet);
    //console.log(q2d[q2a[i]]);
    total += q2d[q2a[i]].length;
}
//console.log("");
for (var i = 0; i < q3a.length; i++) {
    q3d[q3a[i]] = q3d[q3a[i]].sort(sortSet);
    //console.log(q3d[q3a[i]]);
    total += q3d[q3a[i]].length;
}
//console.log("");
for (var i = 0; i < q4a.length; i++) {
    q4d[q4a[i]] = q4d[q4a[i]].sort(sortSet);
    //console.log(q4d[q4a[i]]);
    total += q4d[q4a[i]].length;
}
//console.log("tot:" + total);
//console.log(q1a);
//console.log(q2a);
//console.log(q3a);
//console.log(q4a);
//Determine which asteroid to destroy first by calc closest manhatten distance to origin.
var destroyed = 0;
var destroyedCoord = [[0, 0]];
var currQ = 0;
var id;
var currG = [0, 0, 0, 0];
while (destroyed < 200) {
    switch (currQ) {
        case 0: {
            if (q1.size > 0) {
                if (q1d[q1a[currG[0]]] && q1d[q1a[currG[0]]].length > 0) {
                    destroyedCoord = q1d[q1a[currG[0]]].splice(0, 1); //May need to be a copy
                    //console.log(q1d[q1a[currG[0]]]);
                    destroyed++;
                    //console.log(destroyedCoord);
                }
                currG[0]++;
                if (currG[0] == q1a.length) {
                    currG[0] = 0;
                    currQ++;
                }
            }
            else {
                currQ++;
            }
            break;
        }
        case 1: {
            if (q2.size > 0) {
                if (q2d[q2a[currG[1]]] && q2d[q2a[currG[1]]].length > 0) {
                    destroyedCoord = q2d[q2a[currG[1]]].splice(0, 1); //May need to be a copy
                    //console.log(q1d[q1a[currG[0]]]);
                    destroyed++;
                    //console.log(destroyedCoord);
                }
                currG[1]++;
                if (currG[1] == q2a.length) {
                    currG[1] = 0;
                    currQ++;
                }
            }
            else {
                currQ++;
            }
            break;
        }
        case 2: {
            if (q3.size > 0) {
                if (q3d[q3a[currG[2]]] && q3d[q3a[currG[2]]].length > 0) {
                    destroyedCoord = q3d[q3a[currG[2]]].splice(0, 1); //May need to be a copy
                    //console.log(q1d[q1a[currG[0]]]);
                    destroyed++;
                    //console.log(destroyedCoord);
                }
                currG[2]++;
                if (currG[2] == q3a.length) {
                    currG[2] = 0;
                    currQ++;
                }
            }
            else {
                currQ++;
            }
            break;
        }
        case 3: {
            if (q4.size > 0) {
                if (q4d[q4a[currG[3]]] && q4d[q4a[currG[3]]].length > 0) {
                    destroyedCoord = q4d[q4a[currG[3]]].splice(0, 1); //May need to be a copy
                    //console.log(q1d[q1a[currG[0]]]);
                    destroyed++;
                    //console.log(destroyedCoord);
                }
                currG[3]++;
                if (currG[3] == q4a.length) {
                    currG[3] = 0;
                    currQ = 0;
                }
            }
            else {
                currQ = 0;
            }
            break;
        }
        default: {
            console.log("Invalid choice");
            break;
        }
    }
    //console.log(destroyed + ": " + (destroyedCoord[0][0] + bc[0]) + ", " + (destroyedCoord[0][1] + bc[1]) + " " + currQ);
}
console.log((destroyedCoord[0][0] + bc[0]) * 100 + (destroyedCoord[0][1] + bc[1]));
function sortSet(a, b) {
    return (Math.abs(a[0]) - Math.abs(b[0])) + (Math.abs(a[1]) - Math.abs(b[1]));
}
function sortSetReverse(a, b) {
    return (Math.abs(b[0]) - Math.abs(a[0])) + (Math.abs(b[1]) - Math.abs(a[1]));
}
function sortArray(a, b) {
    return (+a) - (+b);
}
//# sourceMappingURL=Day10.js.map