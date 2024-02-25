document.addEventListener("DOMContentLoaded", function() {
    // Manejar el envío del formulario de contacto
    let formContacto = document.getElementById("formularioContacto");
    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario automáticamente

            // Obtener los valores del formulario
            let nombre = document.getElementById("nombre").value;
            let correo = document.getElementById("correo").value;
            let mensaje = document.getElementById("mensaje").value;

            // Mostrar mensaje de éxito al usuario
            Swal.fire({
                title: 'Mensaje enviado',
                text: '¡Gracias por ponerte en contacto con nosotros!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });

            // Limpiar los campos del formulario
            formContacto.reset();
        });
    }

    // Función para mostrar los precios de los servicios en una ventana emergente
    function mostrarPrecios() {
        let preciosText = obtenerPreciosTexto();
        
        // Mostrar ventana emergente con los precios
        Swal.fire({
            title: 'Precios de los servicios',
            text: preciosText,
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    }

    // Función para obtener el texto con los precios de los servicios
    function obtenerPreciosTexto() {
        let preciosText = "Precios de los servicios\n";
        let servicios = document.querySelectorAll("div#contenedor p");
        servicios.forEach(servicio => {
            let nombre = servicio.textContent.trim();
            let precio = obtenerPrecioPorNombre(nombre);
            preciosText += `${nombre}: $${precio}\n`;
        });
        return preciosText;
    }

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

    // Agregar evento al botón de consulta
    let consultaButton = document.getElementById("consultaButton");
    if (consultaButton) {
        consultaButton.addEventListener("click", function() {
            // Mostrar mensaje de consulta
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

    // Función para mostrar los productos seleccionados
    function mostrarProductos(design, businessType) {
        console.log('Diseño seleccionado:', design);
        console.log('Tipo de negocio seleccionado:', businessType);
    }

    // Función para mostrar notificaciones Toastify con estilos
    let totalItemsCarrito = 0;

    // Función para actualizar el contador de ítems en el icono del carrito
    function actualizarContadorCarrito() {
        const contadorCarrito = document.getElementById('contadorCarrito');
        contadorCarrito.textContent = totalItemsCarrito;
    }

    // Función para mostrar notificaciones Toastify con estilos
    function mostrarNotificacion(texto) {
        var notificacion = document.createElement('div');
        notificacion.textContent = texto;
        notificacion.style.backgroundColor = '#007bff';
        notificacion.style.color = '#fff';
        notificacion.style.borderRadius = '5px';
        notificacion.style.fontFamily = 'Arial, sans-serif';
        notificacion.style.fontSize = '16px';
        notificacion.style.padding = '10px 20px';
        notificacion.style.marginBottom = '10px';
        notificacion.style.position = 'fixed';
        notificacion.style.top = '20px';
        notificacion.style.right = '20px';
        notificacion.style.zIndex = '1000';
        notificacion.style.animation = 'push-up 0.5s ease-in-out'; // Animación push-up
        document.body.appendChild(notificacion);
        setTimeout(function() {
            notificacion.remove(); // Eliminar la notificación después de 3 segundos
        }, 3000);
    }

    // Función para agregar un ítem al carrito
    function agregarItemAlCarrito(item) {
        const listaCarrito = document.getElementById('listaCarrito');
        const elemento = document.createElement('li');
        elemento.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(elemento);

        // Incrementar el contador de ítems en el carrito
        totalItemsCarrito++;
        // Actualizar visualmente el contador de ítems en el icono del carrito
        actualizarContadorCarrito();

        // Mostrar notificación Toastify
        mostrarNotificacion(`Se ha añadido ${item.nombre} al carrito.`);
    }

    // Agregar evento a los botones de agregar al carrito
    const productos = document.querySelectorAll('.agregar-carrito');
    productos.forEach(producto => {
        producto.addEventListener('click', function(event) {
            const boton = event.target;
            const nombre = boton.dataset.nombre;
            const precio = parseFloat(boton.dataset.precio);

            // Añadir producto al carrito
            const item = { nombre, precio };
            agregarItemAlCarrito(item);
        });
    });
});
