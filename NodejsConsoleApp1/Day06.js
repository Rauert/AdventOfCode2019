"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Node {
    constructor(value) {
        this.children = Array();
        this.value = value;
    }
    setParent(parent) {
        this.parent = parent;
    }
    addChild(child) {
        this.children.push(child);
    }
}
var lines = fs.readFileSync('input06.txt', 'utf8');
var data = lines.split("\n");
var treeIDs = new Array();
var treeDict = {};
//Part 1
for (var i = 0; i < data.length; i++) {
    if (data[i]) {
        var objects = data[i].split(")");
        if (!treeDict[objects[0]]) {
            treeIDs.push(objects[0]);
            treeDict[objects[0]] = new Node(objects[0]);
        }
        if (!treeDict[objects[1]]) {
            treeIDs.push(objects[1]);
            treeDict[objects[1]] = new Node(objects[1]);
        }
        treeDict[objects[0]].addChild(treeDict[objects[1]]);
        treeDict[objects[1]].setParent(treeDict[objects[0]]);
    }
}
var total = 0;
for (var j = 0; j < treeIDs.length; j++) {
    var nd = treeDict[treeIDs[j]];
    while (nd.parent) {
        total++;
        nd = nd.parent;
    }
}
console.log(total);
//Part 2
var answers = Array();
var visited = Array();
bfs("YOU", 0, visited);
function bfs(curr, count, visited) {
    visited.push(curr);
    count++;
    var currNode = treeDict[curr];
    if (currNode.value == "SAN") {
        answers.push(count);
        return;
    }
    if (currNode.parent) {
        if (!exists(currNode.parent.value, visited)) {
            bfs(currNode.parent.value, count, visited.slice(0));
        }
    }
    if (currNode.children) {
        for (var k = 0; k < currNode.children.length; k++) {
            if (!exists(currNode.children[k].value, visited)) {
                bfs(currNode.children[k].value, count, visited.slice(0));
            }
        }
    }
}
for (var i = 0; i < answers.length; i++) {
    var finalAnwser = 0;
    if (finalAnwser == 0 || finalAnwser > answers[i]) {
        finalAnwser = answers[i];
    }
    console.log(finalAnwser - 3);
}
function exists(searchItem, array) {
    var rtn = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == searchItem) {
            rtn = true;
            break;
        }
    }
    return rtn;
}
//# sourceMappingURL=Day06.js.map