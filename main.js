let nombre = prompt("Ingresa tu nombre");

if (nombre.toLowerCase() === "silvia") {
    alert("Bienvenida Silvia");
} else {
    alert("Vos no sos Silvia, vos sos " + nombre);
}

function login() {
    let intentos = 0;
    let verificar = true;

    while (verificar && intentos < 3) {
        let usuario = prompt("Ingrese su usuario (tiene 3 intentos):");

        if (usuario && usuario.toLowerCase() === "silvia") {
            alert("¡Bienvenido, querido Silvia!");
            verificar = false;
        } else {
            alert("No se reconoce el usuario: " + usuario);
            intentos++;
        }
    }

    if (intentos >= 3) {
        alert("Usted ha superado los 3 intentos. Inténtelo más tarde.");
    }
}

const hoy = new Date();
console.log(hoy.toLocaleDateString());

let title = document.getElementById("title");
if (title) {
    title.innerText = "¡Bienvenido a la página de diseño web más actualizada del país!";
} else {
    console.log("No se encontró el elemento con ID 'title'.");
}

let container = document.getElementById("contenedor");
if (container) {
    container.innerHTML = `
        <form>
            <h1>Formulario</h1>
            <h2>Ingresa tus datos</h2>
            <input type="text">
            <button>Enviar texto</button>
        </form>
    `;
} else {
    console.log("No se encontró el elemento con ID 'contenedor'.");
}

alert("Bienvenida a la página de diseño web más actualizada del país!");

let consulta = confirm("¿Te puedo ayudar a encontrar el mejor diseño para tu empresa o negocio?");

if (consulta) {
    let diseño = prompt("¿Qué diseño te gustaría para tu nueva página web?");
    let negocio = prompt("Elegí tu tipo de negocio (automovilístico, emprendimiento, contabilidad, supermercado):");

    let productos = [
        { id: 1, nombre: "maquetacion web", precio: 90000 },
        { id: 2, nombre: "estetica web", precio: 40000 },
        { id: 3, nombre: "dominio original", precio: 80000 },
        { id: 4, nombre: "solicitar arreglos", precio: 50000 },
        { id: 5, nombre: "crear una marca de cero", precio: 100000 }
    ];
    
    // Mostrar los productos en la página
    for (const x of productos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <h1>Nombre: ${x.nombre}</h1>
            <h2>Precio: ${x.precio}</h2>
        `;
        document.body.appendChild(contenedor);
    }
    
    function agregaralcarrito() {
        // Obtener los valores de los elementos de entrada (por ejemplo, input)
        let nombreProducto = document.getElementById("nombreProducto").value;
        let precioProducto = document.getElementById("precioProducto").value;
    
        // Construir un objeto para el nuevo producto
        let nuevoProducto = {
            id: productos.length + 1, // Asignar un nuevo ID (por ejemplo, el siguiente número después de la longitud actual del array)
            nombre: nombreProducto,
            precio: parseFloat(precioProducto) // Convertir el precio a un número decimal
        };
    
        // Agregar el nuevo producto
    
        // Agregar el nuevo producto al array de productos
        productos.push(nuevoProducto);
    
        // Mostrar el nuevo producto en la página
        let contenedorNuevoProducto = document.createElement("div");
        contenedorNuevoProducto.innerHTML = `
            <h1>Nombre: ${nuevoProducto.nombre}</h1>
            <h2>Precio: ${nuevoProducto.precio}</h2>
        `;
        document.body.appendChild(contenedorNuevoProducto);
    }

    function FiltrarProducto() {
        let palabraClave = prompt("Ingresa el diseño web que necesitas");
        let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(palabraClave.toLowerCase()));
    
        if (resultado.length > 0) {
            // Mostrar los productos filtrados en una lista en la página web
            let listaProductos = document.getElementById("lista-productos");
            listaProductos.innerHTML = "";
            resultado.forEach(producto => {
                listaProductos.innerHTML += `<li>${producto.nombre} - Precio: ${producto.precio}</li>`;
            });
        } else {
            let sugerencias = "Podrías probar con los siguientes diseños: Diseño web, Arreglos estéticos, Cursos, Crear dominio web, Generar aplicaciones";
            alert("No se ha encontrado ninguna coincidencia con " + palabraClave + ". " + sugerencias);
        }
    
        switch (negocio.toLowerCase()) {
            case "automovilistico":
                alert("Tenemos el diseño '" + diseño + "' para el área de una automotora.");
                break;
            case "emprendimiento":
                alert("Tenemos el diseño '" + diseño + "' para un emprendimiento.");
                break;
            case "contabilidad":
                alert("Tenemos el diseño '" + diseño + "' para el área de contabilidad.");
                break;
            case "supermercado":
                alert("Tenemos el diseño '" + diseño + "' para un supermercado.");
                break;
            default:
                alert("No tenemos el diseño '" + diseño + "' para ese tipo de negocio.");
        }
    
        let comprar = confirm("¿Deseas obtener este diseño para tu negocio?");
    
        if (comprar) {
            alert("¡Gracias por tu compra!");
        }
    
    
        const IVA = 1.22;
    
        function Producto(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    
        function calcularIva(importe) {
            let resultado = importe * IVA;
            alert("El importe final con IVA es: " + resultado);
        }
    
        calcularIva(200);
    }
}