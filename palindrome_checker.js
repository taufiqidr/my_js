function palindrome(str) {
    let temp = str.toLowerCase().trim().replace(/[^\w+]|\s|_/gi, '')
    let rev = [...temp].reverse().join("")

    console.log(temp, rev, temp == rev)
    return temp == rev;
}

palindrome("not a palindrome");