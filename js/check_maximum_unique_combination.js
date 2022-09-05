'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getBiggest' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY listNumber as parameter.
 */

function getBiggest(listNumber) {
let max = listNumber[0]
let pos = 0
for (let i in listNumber){
    if (listNumber[i] > max){
        max = listNumber[i];
        pos = i;
    }

}
let res = listNumber[0] + max
for (let i in listNumber){
    if (listNumber[i]+ max > res && listNumber[i] != max ){
        res = listNumber[i]+max;
    }
    
}

return res;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const listNumberCount = parseInt(readLine().trim(), 10);

    let listNumber = [];

    for (let i = 0; i < listNumberCount; i++) {
        const listNumberItem = parseInt(readLine().trim(), 10);
        listNumber.push(listNumberItem);
    }

    const result = getBiggest(listNumber);

    ws.write(result + '\n');

    ws.end();
}
