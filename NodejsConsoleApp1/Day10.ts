import * as fs from 'fs';
import * as path from 'path';

var data: string = fs.readFileSync('input10.txt','utf8');

var array: string[] = data.split("\n");

var coords: number[][] = Array();


for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i].charAt(j) == "#") {
            coords.push([j, i]);
        }
    }
}
//console.log(coords);

var x: number;
var y: number;
var gradiant: number;

var best: number = 0;
var bc: number[] = [0,0];
var total: number;

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
            //console.log("orig: " + coords[d]);
            //console.log("offset: " + "[ " + x + ", " + y + " ]");
            //console.log("gr: " + gradiant);
            //console.log("");

            if (x == 0 && y > 0) {
                l1.add(gradiant);
            }
            else if (x > 0 && y > 0) {
                q1.add(gradiant);
            }
            else if (x > 0 && y == 0) {
                l2.add(gradiant);
            }
            else if (x > 0 && y < 0) {
                q2.add(gradiant);
            }
            else if (x == 0 && y < 0) {
                l3.add(gradiant);
            }
            else if (x < 0 && y < 0) {
                q3.add(gradiant);
            }
            else if (x < 0 && y == 0) {
                l4.add(gradiant);
            }
            else if (x < 0 && y > 0) {
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
        bc = [coords[c][0], coords[c][1]]
    }
}
console.log(best);


//Part 2

let q1 = new Set();
let q2 = new Set();
let q3 = new Set();
let q4 = new Set();
let l1 = new Set();
let l2 = new Set();
let l3 = new Set();
let l4 = new Set();

var q1d: { [id: number]: number[][]; } = {};
var q2d: { [id: number]: number[][]; } = {};
var q3d: { [id: number]: number[][]; } = {};
var q4d: { [id: number]: number[][]; } = {};
var l1d: number[][] = Array();
var l2d: number[][] = Array();
var l3d: number[][] = Array();
var l4d: number[][] = Array();

for (var d = 0; d < coords.length; d++) {
    if (!(bc[0] == coords[d][0] && bc[1] == coords[d][1])) {
        x = (coords[d][0] - bc[0]);
        y = (coords[d][1] - bc[1]);
        gradiant = x / y;

        if (x == 0 && y > 0) {
            l1.add(gradiant);
            l1d.push([x, y]);
        }
        else if (x > 0 && y > 0) {
            q1.add(gradiant);
            if (!q1d[gradiant]) {
                q1d[gradiant] = [[x, y]];
            }
            else {
                q1d[gradiant].push([x, y]);
            }
        }
        else if (x > 0 && y == 0) {
            l2.add(gradiant);
            l2d.push([x, y]);
        }
        else if (x > 0 && y < 0) {
            q2.add(gradiant);
            if (!q2d[gradiant]) {
                q2d[gradiant] = [[x, y]];
            }
            else {
                q2d[gradiant].push([x, y]);
            }
        }
        else if (x == 0 && y < 0) {
            l3.add(gradiant);
            l3d.push([x, y]);
        }
        else if (x < 0 && y < 0) {
            q3.add(gradiant);
            if (!q3d[gradiant]) {
                q3d[gradiant] = [[x, y]];
            }
            else {
                q3d[gradiant].push([x, y]);
            }
        }
        else if (x < 0 && y == 0) {
            l4.add(gradiant);
            l4d.push([x, y]);
        }
        else if (x < 0 && y > 0) {
            q4.add(gradiant);
            if (!q4d[gradiant]) {
                q4d[gradiant] = [[x, y]];
            }
            else {
                q4d[gradiant].push([x, y]);
            }
        }
        else {
            console.log("ERROR" + x + " " + y);
        }
    }
}

//Sort sets to get order of destruction

q1 = new Set(Array.from(q1).sort());
q2 = new Set(Array.from(q2).sort());
q3 = new Set(Array.from(q3).sort());
q4 = new Set(Array.from(q4).sort());

//Determine which asteroid to destroy first by calc closest manhatten distance to origin.

//When calc 200th remeber offset!!

var destroyed: number = 0;
var destroyedCoord: number[] = [0, 0];
var currQ: number = 0;
var id: number;

while (destroyed < 200) {
    switch (currQ) {
        case 0: {
            if (l1.size > 0 && l1d.length > 0) {
                id = idOfLowest(l1d);
                destroyedCoord = l1d[id]; //May need to be a copy
                l1d.splice(id, 1); //destroy
                destroyed++;
            }
            currQ++;
            break;
        }
        case 1: {
                
            break;
        }
        case 2: {
                
            break;
        }
        case 3: {
                
            break;
        }
        case 4: {

            break;
        }
        case 5: {

            break;
        }
        case 6: {

            break;
        }
        case 7: {

            break;
        }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
}