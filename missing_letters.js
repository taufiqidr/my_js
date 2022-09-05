function fearNotLetter(str) {
    for (let a = 1; a < str.length; a++) {
        if (str.charCodeAt(a) - str.charCodeAt(a - 1) > 1) {
            console.log(String.fromCharCode(str.charCodeAt(a) - 1))
            return String.fromCharCode(str.charCodeAt(a) - 1)
        }
    }
}

fearNotLetter("abce");