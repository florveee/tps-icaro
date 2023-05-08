//1) La variable definida abajo almacena un numero entero entre 1 y 100 de forma aleatoria, es decir que cada vez que se vuelva a ejectuar el codigo obtendrá un número nuevo aleatorio.

//    const numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);

//usar esta variable para determinar si el número es par o impar (Un número es par si el resto de la división sobre 2 es igual a 0). Para calcular el resto usar: resto = dividendo % 2.

const numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1);

resto = numeroRandom % 2

if (resto === 0) {
   console.log("El numero", numeroRandom, "es par.") 
}
else {
   console.log("El numero", numeroRandom, "es impar.")
}

// 2) Dada dos palabras, "tren" y "edificio", hacer un programa que nos permita calcular cuál palabra es más larga. Usar la función length.

function comparar(p1, p2) {
    if (p1.length > p2.length) {
        console.log("La palabra:", p1, "es mas larga que la palabra:", p2)
    }

    else if (p2.length > p1.length) {
        console.log("La palabra:", p2, "es mas larga que la palabra:", p1)
    }

    else if (p1.length === p2.length) {
        console.log("Las palabras", p1, "y", p2, "tienen la misma cantidad de letras")
    }
}

comparar("tren", "edificio")

// 3) Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número 9. Se puede usar la función while o for.

for (i = 0; i < 11; i++) {
    console.log("9 x", i, "=", i*9)
}

// 4) Escribir una función con el nombre "multiplicar" que me permita pasarle un número como párametro y lo multiplique x 23 y retorne el resultado. Usar esta funcion en otra variable y mostrar el resultado con el console.log

function multiplicar(num) {
    return num*23
}

let resultado = multiplicar(3)
console.log(resultado)

//5) Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. Puede usar la variable "numeroRandom" del ejercicio 1.\

let arrayvacio = []

for (i = 0; i < 10; i++) {
    let numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    arrayvacio.push(numeroRandom);
}

console.log(arrayvacio)