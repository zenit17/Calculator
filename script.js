window.onload = function () {
    let inputfield = document.getElementById('inputfield');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button')
    let end = document.getElementById('=')
    let number1 = 0;
    let number2 = 0;
    let clean = 0;

    butDigits.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                console.log(e.target.innerText)
                inputfield.value = e.target.innerText + inputfield.value
                if (clean === 1) {
                    inputfield.value = '';
                    clean = 0
                }
            })
        }
    )


    butMathOperations.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                number1 = inputfield.value
                clean = 1;
                number2 = inputfield.value
                console.log(e.target.innerText)
            })
        }
    )
}

end.addEventListener('click', (e) => {
        if (clean === 1) {
            inputfield.value = '';
            clean = 0
        }
        inputfield.value = number1.value + number2.value
    }
)