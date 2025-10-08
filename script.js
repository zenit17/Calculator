window.onload = () => {
    let inputfield = document.getElementById('inputfield');
    let buttonravno = document.getElementById('ravno');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button')
    let number1 = 0;
    let clean = 0;
    let mathOperation = '';
    let lenInput = 1;

    //обработка нажатий цифр
    butDigits.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                console.log(lenInput + ' цифра = ' + e.target.innerText)
                console.log(e.target.innerText)
                if (clean === 1) {
                    inputfield.value = '';
                    clean = 0;
                }
                if (inputfield.value === ''){
                    lenInput = 1
                }
                if (lenInput === 1 && e.target.innerText === '0') {
                    return;
                }
                inputfield.value = inputfield.value + e.target.innerText
                lenInput = lenInput + 1
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

            let num2 = inputfield.value;

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

                if (num2 === '0') {
                    inputfield.value = 'Делить на 0 нельзя';
                    console.log('Делать на 0 нельзя')
                }
            }
        }
    )

}
//TODO
//первый 0
//возможность вводить после =