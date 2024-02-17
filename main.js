document.addEventListener("DOMContentLoaded", function() {
    // Selección del botón de envío del formulario
    let loginButton = document.getElementById("botonLogin");

    // Agregar evento click al botón de envío del formulario
    loginButton.addEventListener("click", function() {
        // Obtener el valor del campo de nombre de usuario
        let usernameInput = document.getElementById("inputnombre").value || "invitado";

        // Verificar si el nombre de usuario es "silvia" (ignorando mayúsculas/minúsculas)
        if (usernameInput.toLowerCase() === "silvia") {
            // Mostrar mensaje de bienvenida a Silvia
            Swal.fire("Bienvenida Silvia");
        } else {
            // Mostrar mensaje personalizado para otros usuarios
            Swal.fire("Vos no sos Silvia, vos sos " + usernameInput);
        }
    });

    // Obtener la fecha actual
    const today = new Date();
    console.log(today.toLocaleDateString());

    // Cambiar el texto de bienvenida
    let welcomeMessage = document.getElementById("mensajeBienvenida");
    if (welcomeMessage) {
        welcomeMessage.innerText = "¡Bienvenido a la página de diseño web más actualizada del país!";
    } else {
        console.log("No se encontró el elemento con ID 'mensajeBienvenida'.");
    }
});

let button = document.getElementById("boton1");

button.addEventListener("click", () => Swal.fire("¡Bienvenido estimado/a!"));

document.getElementById("boton1").addEventListener("click", function(e) {
    Swal.fire("Se ha enviado correctamente tu solicitud ");
});

let form = document.getElementById("miForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Comentario',
        text: '¿Desea ingresar un comentario a la web?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Comentó algo");
        }
    });
});

Swal.fire("Bienvenida a la página de diseño web más actualizada del país!");

Swal.fire({
    title: 'Consulta',
    text: '¿Te puedo ayudar a encontrar el mejor diseño para tu empresa o negocio?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Siguiente &rarr;',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            progressSteps: ['1', '2']
        }).queue([
            {
                title: 'Diseño',
                text: '¿Qué diseño te gustaría para tu nueva página web?',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un diseño';
                    }
                }
            },
            {
                title: 'Negocio',
                text: 'Elegí tu tipo de negocio (automovilístico, emprendimiento, contabilidad, supermercado):',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un tipo de negocio';
                    }
                }
            }
        ]).then((result) => {
            if (result.value) {
                const answers = result.value;
                const design = answers[0];
                const businessType = answers[1];

                let productos = [
                    { id: 1, nombre: "maquetacion web", precio: 90000 },
                    { id: 2, nombre: "estetica web", precio: 40000 },
                    { id: 3, nombre: "dominio original", precio: 80000 },
                    { id: 4, nombre: "solicitar arreglos", precio: 50000 },
                    { id: 5, nombre: "crear una marca de cero", precio: 100000 }
                ];

                for (const x of productos) {
                    let contenedor = document.createElement("div");
                    contenedor.innerHTML = `
                        <h1>Nombre: ${x.nombre}</h1>
                        <h2>Precio: ${x.precio}</h2>
                    `;
                    document.body.appendChild(contenedor);
                }

                let filteredProducts = productos.filter(producto => producto.nombre.toLowerCase().includes(design.toLowerCase()));
                if (filteredProducts.length > 0) {
                    let listaProductos = document.createElement("ul");
                    listaProductos.id = "lista-productos";
                    filteredProducts.forEach(producto => {
                        let listItem = document.createElement("li");
                        listItem.textContent = `${producto.nombre} - Precio: ${producto.precio}`;
                        listaProductos.appendChild(listItem);
                    });
                    document.body.appendChild(listaProductos);
                } else {
                    let suggestions = "Podrías probar con los siguientes diseños: Diseño web, Arreglos estéticos, Cursos, Crear dominio web, Generar aplicaciones";
                    Swal.fire('No se encontró ninguna coincidencia', suggestions, 'info');
                }

                switch (businessType.toLowerCase()) {
                    case "automovilistico":
                        Swal.fire(`Tenemos el diseño '${design}' para el área de una automotora.`);
                        break;
                    case "emprendimiento":
                        Swal.fire(`Tenemos el diseño '${design}' para un emprendimiento.`);
                        break;
                    case "contabilidad":
                        Swal.fire(`Tenemos el diseño '${design}' para el área de contabilidad.`);
                        break;
                    case "supermercado":
                        Swal.fire(`Tenemos el diseño '${design}' para un supermercado.`);
                        break;
                    default:
                        Swal.fire(`No tenemos el diseño '${design}' para ese tipo de negocio.`);
                }

                Swal.fire('Gracias por tu consulta!', '', 'success');
            }
        });
    }
});