const mostrarLetras = palabra => {
    for (let i = 0 ; i < palabra.length; i++){
        setTimeout(console.log(palabra[i]))
    }
}
 mostrarLetras("hola")