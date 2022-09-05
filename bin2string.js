function bintodec(str) {
    let bin = [128, 64, 32, 16, 8, 4, 2, 1]
    let res = 0
    for (let i in str) {
        if (str[i] == 1) {
            res += parseInt(str[i]) * bin[i]
        }
    }
    return res
}

function binaryAgent(str) {
    let tem = str.split(' ')
    let res = ''
    for (let i in tem) {
        res += String.fromCharCode(bintodec(tem[i]))
    }
    console.log(res)
    return res;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");