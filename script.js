/* var nombre = prompt('Cual es tu nombre?');
var edad = parseInt(prompt('cual es tu edad?'));

document.write("Hola! " + nombre + ". Tu edad es " + edad + " años." );
console.log('mensaje enviado a consola'); */



/*====DETECTA LA PALABRA MAS LARGA*/
/* function wordLongest(frase){
    let palabras = frase.split(" ");
    console.log(palabras);

    let wordLong = "";
    for (let palabra of palabras){
        if (palabra.length > wordLong.length){
            wordLong = palabra;
        }
    }
    return wordLong;

}

console.log(wordLongest('Hola! soy tu hermana')); */


/*======DETECTA TODAS LAS PALABRAS LARGAS DE LA FRASE=====*/
/* function palabrasLargas(frase){
    let palabras = frase.split(" ");
    console.log(palabras);
    let largas = [""];

    for (let palabra of palabras){
        console.log(palabra);
        if(palabra.length > largas[0].length){
            largas = [palabra];

        }else if(palabra.length === largas[0].length){
            largas.push(palabra);

        }
    }
    return palabras;
}

console.log(palabrasLargas('Mi mama me ama como la lona')); */

/*=====FIZZ BUZZ =============*/

/* 
    
    let num = 100;

    for (let i = 1; i <= num ; i++){
        

        if(i % 15 === 0){
            console.log('FizzBuzz');
            continue;
        }
        if( i % 3 === 0){
            console.log('Fizz');
            continue;
        }else if( i % 5 === 0){
            console.log('Buzz');
            continue;
        }else{
            console.log(i);
        }
    } */


//console.log(fizzBuzz());

/* /**========ENCONTRAR NUMERO DE VOCALES EN UN STRING==== */
/* let vocals=['a', 'e', 'i', 'o', 'u'];
let frase = 'El gato maulla';

function contadorVocales(frase){
    let contador = 0;

    for (let i of frase.toLowerCase()){
        if(vocals.includes(i)){
            contador++;
            console.log(i);
        }
    }
    console.log('Cantidad de vocales = ' + contador);
}

console.log(contadorVocales(frase)); */

/*=====CALCULAR LA SUMA DE N NUMEROS======= */
/* let numero = parseInt(prompt('Ingresa un numero'));

function calcularSuma(numero){
    let suma=0;
    for (let i = 1; i<=numero; i++){
        suma += i;
    }
    console.log(suma);
}

console.log(calcularSuma(numero)); */

/**====DETECTAR PROVEEDOR DE EMAIL====*/
/* let email = prompt('Ingresa email');

function detectaEmail(email){
    const ultimoIndice = email.lastIndexOf('@');
    return email.slice(ultimoIndice + 1);
}

console.log(detectaEmail(email)); */

/*======GENERADOR DE CONTRASENAS====== */
/* let longitud = parseInt(prompt('Ingresa la longitud de la contraseña'));

let randomPass = '';
let wordChars = 'abczefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%!.*&';

for(let i = 0; i < longitud; i++){
    randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length));
    /* console.log(randomPass); */
/* }

console.log(randomPass); */

/*======CONTAR LAS VECES Q APARECE UN CARACTER EN UNA FRASE */
/* let frase = prompt('ingresa una frase');
console.log(frase);

let miLetra = 'a';

let contadorLetra = 0;

for (let i = 0; i<frase.length; i++){
    if(frase.charAt(i) === miLetra){
        contadorLetra++;
    }
}

console.log('En la frase ingresada hay ' + contadorLetra + ' letras a'); */