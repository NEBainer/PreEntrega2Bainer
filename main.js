//Algoritmo para calcular deudas//
//Sector en donde se le solicita al usuario ingresar sus deudas y cantidad de dinero que posee//
let deudaTarjeta = Number(prompt("Ingrese la deuda que tiene con su tarjeta"));
let deudaMp = Number(prompt("Ingrese la deuda que posee con MercadoPago"));
let plata = Number(prompt("Ingrese la cantidad de dinero que posee"));
let tieneDeuda = true;
let debenPlata = true;

let deudaTotal = deudaTarjeta + deudaMp;  // Inicializar deudaTotal con las deudas iniciales
let plataTotal = plata;  // Inicializar plataTotal con el dinero inicial

while (tieneDeuda) {
    const respuesta = prompt("¿Posee usted alguna deuda más? Ingrese 'si' o 'no': ");

    if (respuesta.toLowerCase() === 'si') {
        const montoDeuda = parseFloat(prompt("Ingrese la cantidad de dinero que adeuda: "));
        deudaTotal += montoDeuda;  // Acumular la deuda
    } else if (respuesta.toLowerCase() === 'no') {
        tieneDeuda = false;
        alert("Gracias por proporcionar la información solicitada.");
    } else {
        alert("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
    }
}

while (debenPlata) {
    const respuesta = prompt("¿Alguien le debe dinero a usted? Ingrese 'si' o 'no': ");

    if (respuesta.toLowerCase() === 'si') {
        const montoDeben = parseFloat(prompt("Ingrese la cantidad de dinero que le deben: "));
        plataTotal += montoDeben;  // Acumular el dinero que le deben
    } else if (respuesta.toLowerCase() === 'no') {
        debenPlata = false;
        alert("Gracias por proporcionar la información sobre sus deudas.");
    } else {
        alert("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
    }
}
// Variable que utilizo para establecer cuanto le sobra o cuanto queda debiendo de plata 
let vuelto = plataTotal - deudaTotal;
// Mostrar resultados al final
alert(`En total debes: ${deudaTotal} pesos y tenés: ${plataTotal} pesos`);
// Condicional que utilizo para informar cuanta plata le queda a la persona
if (deudaTotal >= plataTotal) {
    alert (`No te alcanza ni para un caramelo amigo, empeza a gastar menos. Tenes: ${vuelto} pesos`);
}
else {
    alert (`Bien ahí amigo, estas sobrado de plata. Tenes: ${vuelto} pesos`);
}