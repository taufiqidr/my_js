let btn1 = document.getElementById("btn1")
let btn0 = document.getElementById("btn0")
let btnClr = document.getElementById("btnClr")
let btnEql = document.getElementById("btnEql")
let btnSum = document.getElementById("btnSum")
let btnSub = document.getElementById("btnSub")
let btnMul = document.getElementById("btnMul")
let btnDiv = document.getElementById("btnDiv")
let res = document.getElementById("res")

btnDiv.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "/"
    res.innerHTML = temp

});

btnMul.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "*"
    res.innerHTML = temp

});

btnSum.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "+"
    res.innerHTML = temp

});

btnSub.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "-"
    res.innerHTML = temp

});

btn0.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "0"
    res.innerHTML = temp
});

btn1.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp += "1"
    res.innerHTML = temp

});

btnClr.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    temp = ""
    res.innerHTML = temp
});

btnEql.addEventListener('click', function handleClick() {
    let temp = res.innerHTML.toString();
    if (temp.match(/\+/g)) {
        let som = temp.split("+")
        let siu = parseInt(som[0], 2) + parseInt(som[1], 2)
        res.innerHTML = siu.toString(2)
    } else if (temp.match(/\-/g)) {
        let som = temp.split("-")
        let siu = parseInt(som[0], 2) - parseInt(som[1], 2)
        res.innerHTML = siu.toString(2)
    } else if (temp.match(/\*/g)) {
        let som = temp.split("*")
        let siu = parseInt(som[0], 2) * parseInt(som[1], 2)
        res.innerHTML = siu.toString(2)
    } else if (temp.match(/\//g)) {
        let som = temp.split("/")
        let siu = parseInt(som[0], 2) / parseInt(som[1], 2)
        res.innerHTML = Math.floor(siu).toString(2)

    } else {
        res.innerHTML = 'error';
    }

});