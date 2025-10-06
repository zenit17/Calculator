window.onload = () => {
    let inputfield = document.getElementById('inputfield');
    let buttonravno = document.getElementById('ravno');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button')
    let number1 = 0;
    let number2 = 0;
    let clean = 0
    let mathOperation = ''

    //обработка нажатий цифр
    butDigits.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                console.log(e.target.innerText)
                if (clean === 1) {
                    inputfield.value = '';
                    clean = 0;
                }
                inputfield.value = inputfield.value + e.target.innerText
            })
        }
    )

//обработка математических операций
    butMathOperations.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                if (e.target.innerText !== '=') {
                    number1 = inputfield.value
                    clean = 1;
                    mathOperation = e.target.innerText
                    console.log(e.target.innerText)
                }
            })
        }
    )

    buttonravno.addEventListener('click', (event) => {
            console.log(number1);
            console.log(mathOperation);
            console.log(inputfield.value);


            if (mathOperation === '+') {
                inputfield.value = +number1 + +inputfield.value
            }
            if (mathOperation === '-') {
                inputfield.value = +number1 - +inputfield.value
            }
            if (mathOperation === '*') {
                inputfield.value = +number1 * +inputfield.value
            }
            if (mathOperation === '/') {
                inputfield.value = +number1 / +inputfield.value
            }
        }
    )

}
//TODO
// деление на 0
// первый 0