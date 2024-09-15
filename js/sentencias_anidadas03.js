
function iniciarFunciones() {

    let operacion = prompt("Ingrese operación deseada. Ej: suma, resta, multiplicacion, division, restadivision"); // Convertir el valor a número
    let num1 = parseInt(prompt("Primer valor ")); // Convertir el valor a número
    let num2 = parseInt(prompt("Segundo valor")); // Convertir el valor a número
    let resultado;

    function funcionA(num1, num2) {
        alert(`Has elegido SUMAR ${num1} y ${num2}`);
        resultado = num1 + num2;
        document.getElementById("la_p1").innerHTML = `La suma de ${num1} y ${num2} son 👉${resultado}`; // Actualizar el contenido del <p>
    }
    
    function funcionB(num1, num2) {
        alert(`Has elegido RESTA de ${num1} menos ${num2}`);
        resultado = num1 - num2;
        document.getElementById("la_p2").innerHTML = `La resta de ${num1} y ${num2} son 👉 ${resultado}`; // Actualizar el contenido del <p>
    }
    
    function funcionC(num1, num2) {
        alert(`Has elegido MULTIPLICACIÓN de ${num1} por ${num2}`);
        resultado = num1 * num2;
        document.getElementById("la_p3").innerHTML = `La multiplicacion de ${num1} y ${num2} son 👉 ${resultado}`; // Actualizar el contenido del <p>
    }
    
    function funcionD(num1, num2) {
        alert(`Has elegido la DIVISIÓN de ${num1} entre ${num2}`);
        resultado = num1 / num2;
        document.getElementById("la_p4").innerHTML = `La division de ${num1} y ${num2} son 👉 ${resultado}`; // Actualizar el contenido del <p>
    }

    function funcionE(num1, num2) {
        alert(`Has elegido RESTA DE LA DIVISIÓN de ${num1} y ${num2}`);
        resultado = num1 % num2;
        document.getElementById("la_p5").innerHTML = `La resta de la division de ${num1} y ${num2} son 👉 ${resultado}`; // Actualizar el contenido del <p>
    }
    
    switch (operacion) {
        case "suma":
            funcionA(num1, num2);
            break;
        case "resta":
            funcionB(num1, num2);
            break;
        case "multiplicacion":
            funcionC(num1, num2);
            break;
        case "division":
            funcionD(num1, num2); // Llamar a la función correcta
            break;
        case "restadivision":
            funcionE(num1, num2); // Llamar a la función correcta
            break;
        default:
            alert("Ninguna función aplicable");
    }
}
