function orbitalPeriod(arr) {
    let res = []
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i in arr) {

        let orbit = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM))
        res.push({
            name: arr[i].name,
            orbitalPeriod: orbit
        })

        console.log(orbit)
    }
    // console.log(res)
    return res
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);