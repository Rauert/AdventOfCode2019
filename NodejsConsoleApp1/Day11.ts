var moons: number[][] =   [[5,-1,5],
                           [0,-14,2],
                           [16, 4, 0],
                           [18, 1, 16]];

//var moons: number[][] =   [[-8, -10, 0],
//                           [ 5,  5,  10],
//                           [ 2, -7,  3],
//                           [ 9, -8, -3]];

//var moons: number[][] = [[-1, 0, 2],
//                            [2, -10, -7],
//                            [4, -8, 8],
//                            [3, 5, -1]];

var vel: number[][] = [[0, 0, 0],
                       [0, 0, 0],
                       [0, 0, 0],
                       [0, 0, 0]];

console.log(0);
console.log(moons);
console.log(vel);
console.log("");
var offset: number;
for (var i = 0; i < 1000; i++) {
    let moonsCurr = JSON.parse(JSON.stringify(moons));
    //console.log("MC");
    //console.log(moonsCurr);
    for (var m = 0; m < moons.length; m++) {
        //apply gravity
        for (var om = 0; om < moons.length; om++) { //Other Moon
            if (m != om) {
                for (var a = 0; a < 3; a++) { //Axis
                    offset = 0;
                    if (moonsCurr[m][a] < moonsCurr[om][a]) {
                        offset = 1;
                    }
                    if (moonsCurr[m][a] > moonsCurr[om][a]) {
                        offset = -1;
                    }
                    vel[m][a] += offset;
                }
            }
        }
        //Apply velocity
        for (var a = 0; a < 3; a++) { //Axis
            moons[m][a] += vel[m][a];
        }
    }
    //console.log("MC");
    //console.log(moonsCurr);
    //console.log("");
    //console.log("");
    //console.log(i + 1);
    //console.log(moons);
    //console.log(vel);
    //console.log("");
}

var energy: number = 0;
for (var i = 0; i < moons.length; i++) {
    energy += (absValue(moons[i]) * absValue(vel[i]));
}
console.log(energy);

function absValue(inVal: number[]): number {
    var total: number = 0;
    for (var i = 0; i < inVal.length; i++) {
        total += Math.abs(inVal[i]);
    }
    return total;   
}

