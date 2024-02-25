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

