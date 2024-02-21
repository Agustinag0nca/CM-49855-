document.addEventListener("DOMContentLoaded", function() {
    // Selección del botón de envío del formulario
    let loginButton = document.getElementById("botonLogin");

    // Cambiar el texto de bienvenida
    let welcomeMessage = document.getElementById("mensajeBienvenida");
    if (welcomeMessage) {
        welcomeMessage.innerText = "¡Bienvenido a la página de diseño web más actualizada del país!";
    } 

    // Agregar evento click al botón 1
    let button = document.getElementById("boton1");
    if (button) {
        button.addEventListener("click", function(e) {
            Swal.fire("Se ha enviado correctamente tu solicitud");
        });
    }

    let form = document.getElementById("miForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            Swal.fire({
                title: 'Inicio de sesión',
                text: '¡Has iniciado correctamente!',
                icon: 'Smily',
                showCancelButton: true,
                confirmButtonText: 'Ok',
            });

            console.log("Comentó algo");

            // Almacena el comentario en Local Storage como un objeto JSON
            const comentario = {
                texto: "Comentó algo",
                fecha: new Date().toISOString()
            };
            localStorage.setItem("comentario", JSON.stringify(comentario));
        });
    }

    // Recuperar el comentario almacenado en Local Storage
    const comentarioGuardadoJSON = localStorage.getItem("comentario");
    if (comentarioGuardadoJSON) {
        const comentarioGuardado = JSON.parse(comentarioGuardadoJSON);
        console.log("Comentario recuperado:", comentarioGuardado.texto);
        console.log("Fecha:", comentarioGuardado.fecha);
    }

    document.addEventListener("DOMContentLoaded", function() {
        let consultaButton = document.getElementById("consultaButton");
        if (consultaButton) {
            consultaButton.addEventListener("click", function() {
                Swal.fire({
                    title: 'Consulta',
                    text: '¿Te puedo ayudar a encontrar el mejor diseño para tu empresa o negocio?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        iniciarConsulta();
                    }
                });
            });
        }
    });
    
    function iniciarConsulta() {
        Swal.fire({
            title: 'Diseño',
            text: '¿Qué diseño te gustaría para tu nueva página web?',
            input: 'text',
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes ingresar un diseño';
                }
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Siguiente'
        }).then((result1) => {
            if (result1.isDismissed) return; // Si se cancela, termina la consulta
            const design = result1.value;
            
            Swal.fire({
                title: 'Negocio',
                text: 'Elegí tu tipo de negocio:',
                input: 'text',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un tipo de negocio';
                    }
                },
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Enviar'
            }).then((result2) => {
                if (result2.isDismissed) return; // Si se cancela, termina la consulta
                const businessType = result2.value;
    
                mostrarProductos(design, businessType);

                document.addEventListener("DOMContentLoaded", function() {
                    let productos = [
                        { id: 1, nombre: "maquetacion web", precio: 90000 },
                        { id: 2, nombre: "estetica web", precio: 40000 },
                        { id: 3, nombre: "dominio original", precio: 80000 },
                        { id: 4, nombre: "solicitar arreglos", precio: 50000 },
                        { id: 5, nombre: "crear una marca de cero", precio: 100000 }
                    ];
                
                    // Obtener el elemento h2 con id "precios"
                    let preciosElement = document.getElementById("precios");
                
                    // Actualizar el contenido del elemento con los datos de los productos
                    if (preciosElement) {
                        preciosElement.innerHTML = "<ul>";
                        productos.forEach(producto => {
                            preciosElement.innerHTML += `<li>${producto.nombre}: $${producto.precio}</li>`;
                        });
                        preciosElement.innerHTML += "</ul>";
                    }
                });                

                Swal.fire('Gracias por tu consulta!', '', 'success');
            });
        });
    }

    function mostrarProductos(design, businessType) {
        console.log('Diseño seleccionado:', design);
        console.log('Tipo de negocio seleccionado:', businessType);
    }
});
