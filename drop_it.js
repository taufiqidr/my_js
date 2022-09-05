function dropElements(arr, func) {
    let res = [...arr]
    for (let i = 0; i < arr.length; i++) {

        if (func(arr[i])) {
            break
        }
        res.shift(arr[i])

        console.log(func(i))
    }
    console.log(res)
    return res;
}

dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; });