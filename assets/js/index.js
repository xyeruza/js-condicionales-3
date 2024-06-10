let verificarButton = document.querySelector("button");

verificarButton.addEventListener('click', () => {
let valor1 = Number(document.querySelector("#selec1").value)
let valor2 = Number(document.querySelector("#selec2").value)
let valor3 = Number(document.querySelector("#selec3").value)



if(valor1 === 9 && valor2 === 1 && valor3 === 1) {
    document.querySelector("#resultado").innerHTML = "Password 1 correcto"
}else if(valor1 === 7 && valor2 === 1 && valor3 === 4) {
    document.querySelector("#resultado").innerHTML = "Password 2 correcto"
}else{
    document.querySelector("#resultado").innerHTML = "Password incorrecto"
}})
