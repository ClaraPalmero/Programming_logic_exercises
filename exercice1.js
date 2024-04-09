//? --- 1 --- Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const sumString = (sentence) => {
    let count = 0;
    for(let i=0; i <= sentence.length; i++){
        count++
}
    return count
}

console.log(sumString("Esto es un contador de caracteres"))

// opción 2:

const contarCadenas = (cadena = "") => 
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

//contarCadenas()
contarCadenas("Hola mundo")


//? --- 2 --- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const cutText = (text, characters) => {
    
    return text.slice(0, characters) //---> (inicio trozo, fin trozo)
}
console.log(cutText("Vamos a cortar el texto", 4))

// opción 2:
 const recortarTexto =(cadena= "", longitud = undefined) =>
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.slice(0, longitud))

 recortarTexto("Hola Mundo", 4)


//? --- 3 --- Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (text, splits) =>{
    
    return text.split(splits)
}
 console.log(stringToArray('El string se convierte en un array', " "))

 // opción 2:

 const cadenaAArray = (cadena ="", separador = undefined) =>
     (!cadena)
        ? console.warn("No ingresaste una cadena de texto")
        : (separador === undefined)
            ?console.warn("No ingresaste el caracter separador")
            : console.info(cadena.split(separador))
        
            cadenaAArray("Esto es un texto de prueba para separar sus elementos en un aray", " ")

//? --- 4 --- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (text, times) =>{
return text.repeat(times)
}
console.log(repeatText("Repite el texto 3 veces ", 3))


