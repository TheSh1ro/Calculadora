function handleBtnCalcular() {
    const a = Number(document.getElementById('valorA').value)
    const b = Number(document.getElementById('valorB').value)
    const c = Number(document.getElementById('valorC').value)

    if (a == 0) {
        document.getElementById('valorA').placeholder = 'Valor A ≠ 0'
        document.getElementById('valorA').style.boxShadow = '0px 0px 5px 2px yellow'
        end
    } else if (document.getElementById('valorA').boxShadow = '0px 0px 5px 2px yellow') {
        document.getElementById('valorA').placeholder = 'Valor A'
        document.getElementById('valorA').addEventListener("mouseover", function(){document.getElementById('valorA').style.boxShadow = '0px 0px 5px 0px rgb(255, 214, 100)'})
        document.getElementById('valorA').addEventListener("mouseout", function(){document.getElementById('valorA').style.boxShadow = 'none'})
    }

    if (document.getElementById('section4').style.visibility == 'hidden') {
        document.getElementById('section4').style.visibility = 'visible'
    }


    let resultado = calcBhaskara(a, b, c)
    createResult(resultado.x1, resultado.x2, a, b, c)
}

function handleBtnClear() {
    document.getElementById('valorA').value = null
    document.getElementById('valorB').value = null
    document.getElementById('valorC').value = null
    document.getElementById('lista-resultados').innerHTML = ''
    document.getElementById('section4').style.visibility = 'hidden'
}

function calcBhaskara(a, b, c) {
    let valorDelta = Math.sqrt(b**2 - (4*a*c))

    if (valorDelta > 0) {
        let x1 = (-b + valorDelta) / (2*a)
        let x2 = (-b - valorDelta) / (2*a)
        return {x1: x1, x2: x2}
    } else if (valorDelta == 0) {
        let x1 = -b / (2*a)
        return {x1: x1, x2: '∅'}
    } else {
        return {x1: '∅', x2: '∅'}
    }
}

function createResult(x1, x2, a, b, c) {
    const lista = document.getElementById('lista-resultados')
    const addLI = document.createElement('li')
    const calcABC = document.createElement('p')

    addLI.innerText = `S = {${x1}, ${x2}}`
    lista.appendChild(addLI)

    calcABC.innerText = `A = ${a} B = ${b} C = ${c}`
    addLI.appendChild(calcABC)

    // let lista2 = document.getElementById('lista-resultados')
    // let addLI2 = document.createElement('li')
    // addLI2.innerText = `S = {${x1}, ${x2}}`
    // lista.appendChild(addLI2)
}