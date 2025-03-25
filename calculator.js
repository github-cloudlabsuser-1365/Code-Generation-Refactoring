// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre 0";
    }
    return a / b;
}

// Función principal para ejecutar la calculadora
function calculadora() {
    const operacion = prompt("Elige una operación: sumar, restar, multiplicar, dividir");
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));

    let resultado;

    switch (operacion.toLowerCase()) {
        case "sumar":
            resultado = sumar(num1, num2);
            break;
        case "restar":
            resultado = restar(num1, num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
    }

    alert(`El resultado es: ${resultado}`);
}

// Ejecutar la calculadora
calculadora();