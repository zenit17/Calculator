window.onload = function () {
    let inputfield = document.getElementById('inputfield');
    let  butDigits = document.querySelectorAll('.digits-wrap button');

    butDigits.forEach(function (el) {
        el.addEventListener('click', function (e){
            console.log(e.target.innerText)
        })
    })
}