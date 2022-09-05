function rot13(str) {
    let res = ''
    for (let i in str) {
        let code = str[i].charCodeAt()
        if (str[i].match(/\w/)) {
            if (code >= 78) {
                res += (str[i], code, String.fromCharCode(code - 13))
            } else {
                res += (str[i], code, String.fromCharCode(code + 13))
            }
        } else {
            res += str[i]
        }
    }
    console.log(res)
    return res;
}
rot13("SERR PBQR PNZC")