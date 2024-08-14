console.log("hola dantee jaja")

document.getElementById("boton").onclick = function(){
    document.getElementById("textoDeArriba").textContent = "bien ahi, queres un faso?";
}
document.getElementById("boton1").onclick = function(){
    document.getElementById("textoDeArriba").textContent = "uhh mal ahi, queres un faso?";
}

/*let variable;
variable = Math.random();
if (variable >= 0 && variable <= 1/3) {
    variable="rock";
}

else if (variable >= 1/3 && variable <=  2/3) {
    variable = "paper";
}

else {
    variable = "sissors";
}

document.getElementById("ramdomm").textContent = variable ;

document.getElementById("jaja").textContent = "si";
/** */