function sumFibs(num) {
    let a = 0
    let b = 1
    let c = 0
    let res = 0

    while (true) {
        a = b
        b = c
        c = a + b
        if (b % 2 !== 0) {
            res += b
        }
        if (c > num) {
            break
        }
    }
    console.log(res)
    return res
}

sumFibs(10);