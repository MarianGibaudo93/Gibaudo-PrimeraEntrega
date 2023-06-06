
// Algoritmo con condicional

// ej edad
let edad = prompt("ingrese su edad");

if (edad >= 18) {
    alert("Sos mayor de edad. Podes ingresar.")
} else {
    alert("Lo siento, vuelve cuando seas mayor.")
}

// ej hora

let hora = prompt("ingrese la hora");

if (hora >= 4 && hora < 12) {
    alert ("Buenos dias!");
} else if (hora >= 12 && hora < 17) {
    alert ("Buenas Tardes!");
} else {
    alert ("Buenas noches!");
}

// FOR ANIDADO

for (let x = 0; x < 5; x++) {
    console.log("Ciclo numero " + x);

    for (let y = 0; y < 5; y++) {
        console.log("Ciclo secundario " + y);
    }
}

// ej sistema interactivo de usuario, dos maneras del mismo ej

let usuario1 = "Marian";
let usuario2 = "Nico";

let nombreUsuario = prompt("ingrese nombre de usuario");

if (nombreUsuario == "Marian") {
    alert ("Bienvenido " + nombreUsuario);
} else if (nombreUsuario == "Nico") {
    alert ("Bienvenido " + nombreUsuario);
} else {
    alert ("Nombre de usuario incorrecto");
} 

if (nombreUsuario == "Marian" || nombreUsuario == "Nico") {
    alert ("Bienvenido "+ nombreUsuario);
} else {
    alert ("Instrusos");
}

// SWITCH

let diaDeSemana = Number(prompt("ingrese dia de la semana con numeros"));

switch(diaDeSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("Sabado");
        break;             
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ese dia no existe");                
}