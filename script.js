document.addEventListener("DOMContentLoaded", function() {
    // Selección del botón de envío del formulario
    let loginButton = document.getElementById("botonLogin");
    });

    // Cambiar el texto de bienvenida
    let welcomeMessage = document.getElementById("mensajeBienvenida");
    if (welcomeMessage) {
        welcomeMessage.innerText = "¡Bienvenido a la página de diseño web más actualizada del país!";
    } 

    // Agregar evento click al botón 1
    let button = document.getElementById("boton1");
    if (button) {
        button.addEventListener("click", function(e) {
            Swal.mixin("Se ha enviado correctamente tu solicitud");
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
    });
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

            Swal.fire('Gracias por tu consulta!', '', 'success');
        });
    });
}

function mostrarProductos(design, businessType) {
    console.log('Diseño seleccionado:', design);
    console.log('Tipo de negocio seleccionado:', businessType);
}