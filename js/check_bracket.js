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
 * Complete the 'validateBracketString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING S as parameter.
 */

function validateBracketString(word) {
    
    if (word.length %2 !== 0) {
        return 0;
    } 
    let pair = ['()','{}','[]'];
    let half = word.length/2;
    let res = 0
    for (let i = 0;i<half;i++){
        let comb = word[i]+word[(word.length-1)-i];
        if (pair.includes(comb)){
            res+=0;
        }else{
        res+=1;
        
        }
    }
    
    if (res == 0){
        return 1;
    }else{
        return 0;
    }
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const S = readLine();

    const result = validateBracketString(S);

    ws.write(result + '\n');

    ws.end();
}
