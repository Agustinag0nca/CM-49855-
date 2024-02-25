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

        // Manejar el envío del formulario de contacto
        let formContacto = document.getElementById("formularioContacto");
        if (formContacto) {
            formContacto.addEventListener("submit", function(event) {
                event.preventDefault(); // Evitar que se envíe el formulario automáticamente
    
                // Obtener los valores del formulario
                let nombre = document.getElementById("nombre").value;
                let correo = document.getElementById("correo").value;
                let mensaje = document.getElementById("mensaje").value;
    
                // Aquí puedes agregar la lógica para enviar los datos del formulario (por ejemplo, a través de una solicitud AJAX)
    
                // Mostrar mensaje de éxito al usuario después de 2 segundos
                setTimeout(function() {
                    Swal.fire({
                        title: 'Mensaje enviado',
                        text: '¡Gracias por ponerte en contacto con nosotros!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }, 2000);
    
                // Limpiar los campos del formulario después de 2 segundos
                setTimeout(function() {
                    formContacto.reset();
                }, 2000);
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

    // Función para obtener el precio de un servicio por su nombre
    function obtenerPrecioPorNombre(nombre) {
        switch (nombre) {
            case "Maquetación Web":
                return 90000;
            case "Estética Web":
                return 40000;
            case "Dominio Original":
                return 80000;
            case "Solicitar Arreglos":
                return 50000;
            case "Crear una Marca de Cero":
                return 100000;
            ; // Precio por defecto si el servicio no está definido
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const carrito = []; // Array para almacenar los productos agregados al carrito
    
        // Función para actualizar el contador de ítems en el icono del carrito
        function actualizarContadorCarrito() {
            const contadorCarrito = document.getElementById('contadorCarrito');
            contadorCarrito.textContent = carrito.length;
        }
    
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

    function mostrarProductos(design, businessType) {
        console.log('Diseño seleccionado:', design);
        console.log('Tipo de negocio seleccionado:', businessType);
    }
});
