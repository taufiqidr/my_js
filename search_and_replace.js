function myReplace(str, before, after) {
    let afters = after
    if (before[0] === before[0].toUpperCase()) {
        afters = after[0].toUpperCase() + after.substr(1)
    } else {
        afters = after[0].toLowerCase() + after.substr(1)
    }

    let res = str.replace(before, afters)
    console.log(res)
    console.log(afters)
    return res;
}

myReplace("I think we should look up there", "up", "Down");