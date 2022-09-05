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
 * Complete the 'minDifference' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY word as parameter.
 */

function checkAnagram(a,b){
    let len1 = a.length
    let len2 = b.length
    
    if (len1!==len2){
        return false;
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2){
        return true;
    }else{
        return false;
    }
}
function minDifference(word) {
let result = []
let res = 0
for (let i in word){
    
    if (word[i].length %2 !== 0) {
        result.push(-1);
    }else{
        let str1 = word[i].substring(0,word[i].length/2)
        let str2 = word[i].substring(word[i].length/2,word[i].length)
        if (checkAnagram(str1,str2)){
            result.push(0)
        }
        else{
            
            let strr1 = str1.split('').sort();
            let strr2 = str2.split('').sort();
            
            for (let i in strr1){
                if (strr1[i]!==strr2[i]){
                    res+=1;
                }
            }
        
            result.push(res)
        }
        
        
        res = 0;
    }
}
return result;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordCount = parseInt(readLine().trim(), 10);

    let word = [];

    for (let i = 0; i < wordCount; i++) {
        const wordItem = readLine();
        word.push(wordItem);
    }

    const result = minDifference(word);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
