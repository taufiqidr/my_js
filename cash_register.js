let dollar = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]
dollar = dollar.reverse()
function back(remain, cid, sum) {
    let res = { status: "", change: [] };
    let back = []
    let rem = remain
    let proceed = true
    cid = cid.reverse()
    for (let i in cid) {
        if (remain > sum) {
            proceed = false
        }
    }
    if (proceed) {
        for (let i in cid) {
            let temp = cid[i][1]
            let change = 0
            if (rem > dollar[i][1] && rem > 0) {
                while (temp > 0) {
                    // console.log(rem, dollar[i][1])
                    temp -= dollar[i][1]
                    rem -= dollar[i][1]
                    rem = rem.toFixed(2)
                    change += dollar[i][1]
                    if (rem - dollar[i][1] < 0) {
                        break
                    }
                }
                back.push([cid[i][0], change])
            }
        }
        if (rem != 0) {
            res.status = "INSUFFICIENT_FUNDS"
            res.change = []
        } else {
            res.status = "OPEN"
            res.change = back
        }

    } else {
        res.status = "INSUFFICIENT_FUNDS"
        res.change = []
    }
    console.log(res)
    return res

}


function checkCashRegister(price, cash, cid) {
    let res = { status: "", change: [] };
    let remain = cash - price
    let sum = 0

    for (let i in cid) {
        sum += cid[i][1];
    }

    if (remain == sum) {
        res.status = "CLOSED"
        res.change = cid
    } else {
        return back(remain, cid, sum)
    }

    return res;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);