const lienzo = document.getElementById('lienzo')
const ctx = lienzo.getContext("2d")
const ctxx = lienzo.getContext("2d")

console.log(ctx);

const cuadrado = () => {
    ctx.beginPath()
    ctx.fillStyle = '#ea0b0c'
    ctx.fillRect(30, 20, 185, 185)
    ctx.strokeRect(30,20,185,185)
    ctx.closePath()
    } 

const circulo = () => {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.fillStyle = '#f9e304'
	ctx.arc(350,112,95, 0, 2*Math.PI)
    ctx.fill()
	ctx.stroke()
    ctx.closePath()
    }

const triangulo = () => {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(567, 20)
    ctx.lineTo(470, 205)
    ctx.lineTo(664, 205)
    ctx.fillStyle = '#093099'
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    } 


cuadrado()
circulo()
triangulo()