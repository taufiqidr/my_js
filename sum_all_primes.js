function isPrime(num) {
    let divisible = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisible += 1
        }
    }
    if (divisible == 2) {
        return true
    } else {
        return false
    }
}

console.log(isPrime(25))

function sumPrimes(num) {
    let res = 0
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            // console.log(i)
            res += i
        }
    }
    console.log(res)
    return res
}

sumPrimes(977);