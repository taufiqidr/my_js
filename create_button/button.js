let btn = document.getElementById("btn")
let num;
btn.addEventListener('click', function handleClick() {
    num = btn.innerHTML
    parseInt(num)
    num++
    btn.innerHTML = num




});