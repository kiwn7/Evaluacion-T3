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
    esencia.innerHTML=`<option>0</option>`
    cera.innerHTML=`<option>0</option>`
    base.innerHTML=`<option>0</option>`
    colorante.innerHTML=`<option>0</option>`
    molde.innerHTML=`<option>0</option>`

    return excedente
}

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