document.addEventListener("DOMContentLoaded", function() {
    // Manejar el envío del formulario de inicio de sesión
    let formLogin = document.getElementById("miForm");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario automáticamente

            // Mostrar mensaje de inicio de sesión
            Swal.fire({
                title: 'Inicio de sesión',
                text: '¡Has iniciado sesión correctamente!',
                icon: 'success',
                confirmButtonText: 'Ok',
            });
        });
    }

// Función para enviar el formulario de contacto con AJAX
function enviarFormularioContacto(nombre, correo, mensaje) {
    return new Promise((resolve, reject) => {
        // Datos del formulario
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('correo', correo);
        formData.append('mensaje', mensaje);

        // Configuración de la solicitud AJAX
        const requestOptions = {
            method: 'POST',
            body: formData
        };

        // Realizar la solicitud AJAX al servidor (reemplaza 'url_del_servidor' con la URL real)
        fetch('url_del_servidor', requestOptions)
            .then(response => {
                // Verificar si la respuesta fue exitosa (código de estado 200)
                if (response.ok) {
                    resolve(); // Éxito al enviar el formulario
                } else {
                    // Si la respuesta no fue exitosa, rechazar la promesa con un mensaje de error
                    reject('Error al enviar el formulario: ' + response.statusText);
                }
            })
            .catch(error => {
                // Capturar cualquier error durante la solicitud AJAX y rechazar la promesa
                reject('Error al enviar el formulario: ' + error.message);
            });
    });
}


    // Manejar el envío del formulario de contacto
    let formContacto = document.getElementById("formularioContacto");
    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario automáticamente

            // Obtener los valores del formulario
            let nombre = document.getElementById("nombre").value;
            let correo = document.getElementById("correo").value;
            let mensaje = document.getElementById("mensaje").value;

            // Enviar el formulario y manejar la promesa resultante
            enviarFormularioContacto(nombre, correo, mensaje)
                .then(() => {
                    // Mostrar mensaje de éxito al usuario
                    Swal.fire({
                        title: 'Mensaje enviado',
                        text: '¡Gracias por ponerte en contacto con nosotros!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                })
                .catch((error) => {
                    // Manejar errores
                    console.error('Error al enviar el formulario:', error);
                    Swal.fire({
                        title: 'Error',
                        text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                })
                .finally(() => {
                    // Limpiar los campos del formulario
                    formContacto.reset();
                });
        });
    }

    // Agregar lógica para el botón de consulta
    let consultaButton = document.getElementById("consultaButton");
    if (consultaButton) {
        consultaButton.addEventListener("click", function() {
            // Lógica para el botón de consulta aquí
            Swal.fire({
                title: 'Consulta',
                text: '¿Te puedo ayudar a encontrar el mejor diseño para tu empresa o negocio?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Realizar la consulta
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
                        if (result1.isConfirmed) {
                            const design = result1.value;
                            Swal.fire({
                                title: 'Negocio',
                                text: 'Elegí tu tipo de negocio (automovilístico, emprendimiento, contabilidad, supermercado):',
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
                                if (result2.isConfirmed) {
                                    const businessType = result2.value;
                                    mostrarProductos(design, businessType);
                                    Swal.fire('Gracias por tu consulta!', '', 'success');
                                }
                            });
                        }
                    });
                }
            });
        });
    }

    // Función para actualizar el contador de ítems en el icono del carrito
    function actualizarContadorCarrito() {
        const contadorCarrito = document.getElementById('contadorCarrito');
        contadorCarrito.textContent = carrito.length;
    }

    const carrito = []; // Array para almacenar los productos agregados al carrito

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        actualizarContadorCarrito();
    }

    // Agregar evento a los botones de agregar al carrito
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = boton.dataset.nombre;
            const precio = parseFloat(boton.dataset.precio);
            agregarAlCarrito(nombre, precio);

            // Mostrar mensaje de éxito al usuario
            Swal.fire({
                title: 'Agregado al carrito',
                text: `${nombre} se ha añadido al carrito.`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
    });
});

