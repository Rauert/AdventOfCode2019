import * as fs from 'fs';
import * as path from 'path';

var data: string = fs.readFileSync('input03.txt','utf8');

var array: string[] = data.split("\n");
var wire1: string[] = array[0].split(",");
var wire2: string[] = array[1].split(",");
var total: number = 0;

console.log(wire1);
console.log(wire2);

var wire1Coords: number[] = calcCoords(wire1);
var wire2Coords: number[] = calcCoords(wire2);

console.log(wire1Coords);
console.log(wire2Coords);

calcIntersection(wire1Coords, wire2Coords);

function calcCoords(wire: string[]): number[] {

    var wireCoords: number[] = new Array();
    var x: number = 0;
    var y: number = 0;

    var length: number;

    for (var i = 0; i < wire.length; i++) {
        length = Number(wire[i].substring(1, wire[i].length));
        switch (wire[i].charAt(0)) {
            case "U": {
                for (var j = 0; j < length; j++) {
                    y += 1;
                    wireCoords.push(x);
                    wireCoords.push(y);
                }
                break;
            }
            case "D": {
                for (var j = 0; j < length; j++) {
                    y -= 1;
                    wireCoords.push(x);
                    wireCoords.push(y);
                }
                break;
            }
            case "R": {
                for (var j = 0; j < length; j++) {
                    x += 1;
                    wireCoords.push(x);
                    wireCoords.push(y);
                }
                break;
            }
            case "L": {
                for (var j = 0; j < length; j++) {
                    x -= 1;
                    wireCoords.push(x);
                    wireCoords.push(y);
                }
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    }

    return wireCoords;
}

function calcIntersection(coords1: number[], coords2: number[]) {
    var best: number = 1000000000;
    var best2: number = 1000000000;
    var dist: number;
    var intersections: number[] = new Array();

    for (var c1 = 0; c1 < coords1.length; c1 += 2) {
        for (var c2 = 0; c2 < coords2.length; c2 += 2) {
            //console.log(coords1[c1] + " " + coords2[c2] + " " + coords1[c1 + 1] + " " + coords2[c2 + 1]);
            if (coords1[c1] == coords2[c2] && coords1[c1 + 1] == coords2[c2 + 1]) {
                dist = Math.abs(coords1[c1]) + Math.abs(coords1[c1 + 1]);
                if (dist < best) {
                    best = dist;
                }
                intersections.push(coords1[c1]);
                intersections.push(coords1[c1+1]);
            }
        }
    }
    console.log("P1: " + best);

    for (var i = 0; i < intersections.length; i += 2) {
        for (var c1 = 0; c1 < coords1.length; c1 += 2) {
            if (coords1[c1] == intersections[i] && coords1[c1 + 1] == intersections[i + 1]) {
                dist = ((c1 / 2) + 1);
                c1 = coords1.length;
            }
        }
        for (var c2 = 0; c2 < coords2.length; c2 += 2) {
            if (coords2[c2] == intersections[i] && coords2[c2 + 1] == intersections[i + 1]) {
                dist += ((c2/2)+1);
                c2 = coords2.length;
            }
        }
        if (dist < best2) {
            best2 = dist;
        }
    }
    console.log("P2: " + best2);
}
