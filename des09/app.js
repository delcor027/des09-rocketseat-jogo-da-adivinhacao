const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter' && screen1.classList.contains("hide")) {
        handleResetClick()
    }
})

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const userNumber = Number(inputNumber.value)

    if (userNumber >= 1 && userNumber <= 10) {
        if (userNumber === randomNumber) {
            toggleScreen()
            screen2.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas!`
        }
        inputNumber.value = ""
        xAttempts++
    } else if (inputNumber.value === "") {
        window.alert("Por favor, digite um número entre 1 e 10.")
    } else {
        window.alert("Por favor, digite um número válido entre 1 e 10.")
    }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}