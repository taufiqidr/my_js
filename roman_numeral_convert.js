let arab = [['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5]]
let arab_s = [['CM', 900], ['CD', 400], ['XC', 90], ['XL', 40], ['IX', 9], ['IV', 4]]

function isSpecial(num) {
    let a = num < 1000 && num >= 900
    let b = num < 500 && num >= 400
    let c = num < 100 && num >= 90
    let f = num < 50 && num >= 40
    let d = num == 9
    let e = num == 4

    return a | b | c | d | e | f
}


function convertToRoman(num) {
    let res = ''
    let idx = 0
    let idx_s = 0
    while (num > 0) {
        if (num < 4) {
            res += 'I'
            num -= 1;
        } else {
            if (isSpecial(num)) {
                while (num - arab_s[idx_s][1] < 0) {
                    idx_s += 1
                }
                res += arab_s[idx_s][0]
                num -= arab_s[idx_s][1]

            } else {
                while (num - arab[idx][1] < 0) {
                    idx += 1
                }
                res += arab[idx][0]
                num -= arab[idx][1]

            }
        }
    }
    return res
}

console.log(convertToRoman(44));