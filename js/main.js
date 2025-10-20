//WEBapp: Simulado de Dados (MVP)
//Version: 1.0 - Tirar un dado de 6 caras y mostrar el resultado en pantalla


//OBJETO DADO - pasar de funciones metidas en funciones, a trabajar con el concepto de objetos
let dado ={
    //PROPIEDADES - para que el usuario lo pueda cambiar
    cantosRedondeados: true,
    material: ["plástico", "madera", "metal", "resina"],
    color: "blanco",
    caras: [4,6,8,10,12,20,100],
    grabado: false,
    tamano: ["pequeño","standard","grande"],
    tamano2: {
        ["pequeño"]: "2cm",
        ["standard"]: "3cm",
        ["grande"]: "5cm"
    },
    peso: ["ligero","medio","pesado"],
    marca: ["Hasbro","WizDice","Chessex", "Q-Workshop","GameScience"],
    
    //MÉTODOS - FUNCIONALIDADES - para hacer cosas con el dado
    tirar: function(caras=6) { //eliges las caras
        //si las caras no coinciden con las caras definidas en la propiedad caras, devolver un mensaje de error
        if (!this.caras.includes(caras)) {
            return "Error: el dado no tiene " + caras + " caras."
        }
        return Math.floor(Math.random() * caras) +1
    }
}

//Conexiones con los ID del HTML.
const zonaDado = document.getElementById('zonaDado') //div
const boton = document.getElementById('boton') //<a>



//hemos quitado boton y ahora el evento es al clicar en la zona del dado
zonaDado.addEventListener('click', function() {
  const resultado = dado.tirar() 
  zonaDado.children[0].textContent = resultado;
  //rotación del div (zonaDado) al tirar el dado
  zonaDado.style.transform = "rotate(" + (Math.random() * 90) + "deg)";
})