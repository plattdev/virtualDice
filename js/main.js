//Conexiones con los ID del HTML.
const zonaDado = document.getElementById('zonaDado')
const boton = document.getElementById('boton')

//Función que se encarga de enseñar el resultado del dado en HTML
function tirarDado() {
    //LLamamos a la función dadoDeSeis y guardamos el resultado en una variable. resultado tendrá un número del 1 al 6
    const resultado = dadoDeSeis()
    
    
    //Creación de una constante mapa de todos los valores de posición del dado
    const posicionesDado = new Map([
        [1, "0px center"],
        [2, "-350px center"],
        [3, "-700px center"],
        [4, "-1050px center"],
        [5, "-1400px center"],
        [6, "-1750px center"]
    ])
    
    //Comparar el resultado de la tirada del dado, si es igual que el key del mapa, insertar el value en el CSS de zonaDado
        if (posicionesDado.has(resultado)) {
            zonaDado.style.backgroundPosition = posicionesDado.get(resultado)

/*
    //insertar un CSS en una etiqueta HTML ID zonaDado
    switch (resultado) {
        //convierte el numero de una tirada de dado, inserta un CSS en una etiqueta HTML ID zonaDado, cuando se llame a la función tirarDado. El método style hace de puente entre JS y CSS
      case 1:
        zonaDado.style.backgroundPosition = posicionesDado.get(1)
        break
      case 2:
          zonaDado.style.backgroundPosition = posicionesDado.get(2)
        break
      case 3:
          zonaDado.style.backgroundPosition = posicionesDado.get(3)
        break
      case 4:
          zonaDado.style.backgroundPosition = posicionesDado.get(4)
        break
      case 5:
          zonaDado.style.backgroundPosition = posicionesDado.get(5)
        break
      case 6:
          zonaDado.style.backgroundPosition = posicionesDado.get(6)
        break
        
        // No es necesario el default porque el dado siempre dará un número entre 1 y 6, nunca dará otro número

        */
    }

    //Función que ella sola ejecute al llamarla una tirada de dados de 6 caras. Esta funcion no necesita parámetros. Dentro de una función metemos un número dentro de una variable
    function dadoDeSeis() {
    //Genera un numero aleatorio entre 1 y 6. El floor si hay decimales (que si hay al ser random) te los pasa a un numero entero. Y con el +1 hace que nunca salga un 0.
        const resultado = Math.floor(Math.random() * 6) + 1
        //mostrar por consola el resultado
        //console.log(`Has sacado un ${resultado}`)
        //tengo una funcion que me devuelve un numero aleatorio al ejecutar return (ahora tengo que mostrarlo en el HTML
        return resultado
    }
}
//Llamamos a la función para que se ejecute
//tirarDado()



//Pulsar el botón y que se ejecute la función -> add event listener, pendiente de un click (en este caso), que ejecute la función tirarDado
boton.addEventListener('click', function() {
  tirarDado()
})