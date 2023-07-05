window.addEventListener('load', e=>{
    cargarStock()
})

//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    precioTotal()
})

/**
 * 1) Funcion para cargar el stock disponible
 */
function cargarStock(){
    //trae los objetos de la listas desplegables de cada producto
    let esencia = document.getElementById('esencia')
    let cera = document.getElementById('cera')
    let base = document.getElementById('base')
    let colorante = document.getElementById('colorante')
    let molde = document.getElementById('molde')

    //inserta la opcion 0 dentro de cada una de las listas
    for (var i = 0; i <= 30; i ++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        esencia.appendChild(option);
    }

    for (var i = 0; i <= 50; i ++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        cera.appendChild(option);
    }

    for (var i = 0; i <= 26; i ++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        base.appendChild(option);
    }
    
    for (var i = 0; i <= 45; i ++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        colorante.appendChild(option);
    }
    
    for (var i = 0; i <= 24; i ++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        molde.appendChild(option);
    }

    
}

var cantidadEsencia = parseInt(document.getElementById("esencia").value);
var cantidadCera = parseInt(document.getElementById("cera").value);
var cantidadBase = parseInt(document.getElementById("base").value);
var cantidadColorante = parseInt(document.getElementById("colorante").value);
var cantidadMolde = parseInt(document.getElementById("molde").value);

var precioEsencia=1500
var precioCera=2000
var precioBase=1500
var precioColorante=1000
var precioMolde=3000

var catan=1500
var laferrere=2000

/**
 * 2) Funcion para calcular el total del pedido
 */
function precioTotal(){
    //trae la opcion de la localidad seleccionada
    let localidad = document.getElementById('localidad').value

    //recorre la lista de productos y guarda los valores numericos en el arreglo "productos"
    let productos = []
    document.getElementsByName("prod[]").forEach(l => {
        productos.push(parseInt(l.value))
    })
    //trae el codigo de descuento
    let codigo = document.getElementById('codigo').value

    let total=0; 


    alert("El total del pedido es de: "+total)
}

function precioTotal(){
    // Trae la opción de la localidad seleccionada
    let localidad = document.getElementById('localidad').value;
    if(localidad=="Virrey del pino" || localidad=="Gonzalez Catan")
    {
        localidad=catan;
    }
    else if(localidad=="La Ferrere" || localidad=="Laferrere")
    {
        localidad=laferrere;
    }

    // Trae el código de descuento
    let codigo = document.getElementById('codigo').value;

    // Obtiene los valores de cantidad actualizados de las listas desplegables
    var cantidadEsencia = parseInt(document.getElementById("esencia").value);
    var cantidadCera = parseInt(document.getElementById("cera").value);
    var cantidadBase = parseInt(document.getElementById("base").value);
    var cantidadColorante = parseInt(document.getElementById("colorante").value);
    var cantidadMolde = parseInt(document.getElementById("molde").value);

    // Realiza el cálculo del total del pedido
    var productosTotal = (cantidadBase * precioBase) + (cantidadEsencia * precioEsencia) + (cantidadCera * precioCera) + (cantidadColorante * precioColorante) + (cantidadMolde * precioMolde);
    let total = localidad + productosTotal;

    // Aplica el descuento si el código es válido
    if (codigo === "ELI2023") {
        total *= 0.9; // Aplica un descuento del 10%
    }

    // Muestra el total del pedido en un mensaje de alerta
    alert("El total del pedido es de: " + total);
}