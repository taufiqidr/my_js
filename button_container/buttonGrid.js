let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

btn5.addEventListener('click', function handleClick() {
    let temp1 = btn1.innerHTML
    let temp2 = btn2.innerHTML
    let temp3 = btn3.innerHTML
    let temp4 = btn4.innerHTML
    let temp6 = btn6.innerHTML
    let temp7 = btn7.innerHTML
    let temp8 = btn8.innerHTML
    let temp9 = btn9.innerHTML

    btn1.innerHTML = temp4


    btn2.innerHTML = temp1


    btn3.innerHTML = temp2


    btn4.innerHTML = temp7

    btn6.innerHTML = temp3

    btn7.innerHTML = temp8

    btn8.innerHTML = temp9

    btn9.innerHTML = temp6




});