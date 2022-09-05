function reverseString(s) {
    let res = s
    try {
        res = s.split("").reverse().join("")
    } catch (e) {
        res = s
        console.log(e.message)
    } finally {
        console.log(res)
    }
}

function isPositive(a) {
    try {
        if (a > 0) {
            return 'YES'
        } else if (a < 0) {
            throw 'Negative Error'
        } else {
            throw 'Zero Error'
        }
    } catch (err) {
        return err
    }

}