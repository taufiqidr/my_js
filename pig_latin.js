function translatePigLatin(str) {
    let reg = /^[aiueo]/gi
    if (reg.test(str) === true) {
        return str.concat('way')
    }
    else {
        let ger = /[^aiueo]+/gi
        let rep = str.match(ger)
        console.log(str.substr(rep[0].length) + rep[0] + 'ay')
        return str.substr(rep[0].length) + rep[0] + 'ay'
    }
}

translatePigLatin("schwartz");