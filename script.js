// inputs e dvi hehe
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let div = document.getElementById('div')
//

// Botoes
let mais = document.getElementById('mais').addEventListener('click', somar)
let menos = document.getElementById('menos').addEventListener('click', subtrair)
let vezes = document.getElementById('vezes').addEventListener('click', multiplicar)
let divisao = document.getElementById('divisao').addEventListener('click', dividir)
//


//
function somar() {
    if (input1.value === '' || input2.value === '') {
        alert('Insira Um numero por favor')
    } else {
        let result = Number(input1.value) + Number(input2.value)
        div.innerHTML = result
    }
}

//
function subtrair() {
    if (input1.value === '' || input2.value === '') {
        alert('Insira Um numero por favor')
    } else {
        let result = Number(input1.value) - Number(input2.value)
        div.innerHTML = result
    }
}

//
function multiplicar() {
    if (input1.value === '' || input2.value === '') {
        alert('Insira Um numero por favor')
    } else {
        let result = Number(input1.value) * Number(input2.value)
        div.innerHTML = result
    }
}

//
function dividir() {
    if (input1.value === '' || input2.value === '') {
        alert('Insira Um numero por favor')
    } else {
        let result = Number(input1.value) / Number(input2.value)
        div.innerHTML = result
    }
}