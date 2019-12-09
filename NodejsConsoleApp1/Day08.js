"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var lines = fs.readFileSync('input08.txt', 'utf8');
var data = lines.split("\n")[0];
var x = 25;
var y = 6;
var mn = x * y;
var layerCount = data.length / mn;
var count = Array(layerCount);
var imageLayers = Array(layerCount);
for (var li = 0; li < layerCount; li++) {
    count[li] = 0;
    imageLayers[li] = "";
    for (var i = 0; i < mn; i++) {
        imageLayers[li] = imageLayers[li] + data.charAt(i + (mn * li));
        if (data.charAt(i + (mn * li)) == '0') {
            count[li]++;
        }
    }
}
var lowestLayerCount = -1;
var lowestLayerPos = -1;
for (var li = 0; li < layerCount; li++) {
    if (lowestLayerPos == -1 || count[li] < lowestLayerCount) {
        lowestLayerCount = count[li];
        lowestLayerPos = li;
    }
}
var onesCount = 0;
var twosCount = 0;
for (var i = 0; i < mn; i++) {
    if (data.charAt(i + (mn * lowestLayerPos)) == '1') {
        onesCount++;
    }
    else if (data.charAt(i + (mn * lowestLayerPos)) == '2') {
        twosCount++;
    }
}
console.log("P1: " + (onesCount * twosCount));
var char;
console.log("");
var imageLL = "";
for (var i = 0; i < mn; i++) {
    char = "2";
    for (var j = 0; j < layerCount; j++) {
        if (imageLayers[j][i] == "1" && char == "2") {
            char = "#";
        }
        if (imageLayers[j][i] == "0" && char == "2") {
            char = " ";
        }
        //console.log(imageLayers[i]);
    }
    imageLL = imageLL + char;
}
for (var i = 0; i < y; i++) {
    console.log(imageLL.substr(i * x, x));
}
//# sourceMappingURL=Day08.js.map