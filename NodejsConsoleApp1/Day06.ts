import * as fs from 'fs';
import * as path from 'path';

class Node {
    value: string;
    parent: Node;
    children: Node[] = Array();
    constructor(value: string) {
        this.value = value;
    }
    setParent(parent: Node) {
        this.parent = parent;
    }
    addChild(child: Node) {
        this.children.push(child);
    }
}

var lines: string = fs.readFileSync('input06.txt','utf8');

var data: string[] = lines.split("\n");
var treeIDs: string[] = new Array();
var treeDict: { [id: string]: Node; } = {};

//Part 1
for (var i = 0; i < data.length; i++) {
    if (data[i]) {
        var objects: string[] = data[i].split(")");
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

var total: number = 0;
for (var j = 0; j < treeIDs.length; j++) {
    var nd: Node = treeDict[treeIDs[j]];
    while (nd.parent) {
        total++;
        nd = nd.parent;
    }
}

console.log(total);


//Part 2
var answers: number[] = Array();
var visited: string[] = Array();

bfs("YOU", 0, visited);

function bfs(curr: string, count: number, visited: string[]) {
    visited.push(curr);
    count++;

    var currNode: Node = treeDict[curr];
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
    var finalAnwser: number = 0;
    if (finalAnwser == 0 || finalAnwser > answers[i]) {
        finalAnwser = answers[i];
    }
    console.log(finalAnwser-3);
}

function exists(searchItem: string, array: string[]): boolean {
    var rtn: boolean = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == searchItem) {
            rtn = true;
            break;
        }
    }
    return rtn;
}
