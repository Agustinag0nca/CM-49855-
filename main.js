let nombre = prompt("Ingresa tu nombre");

if (nombre.toLowerCase() === "silvia") {
    alert("Bienvenida Silvia");
} else {
    alert("Vos no sos Silvia, vos sos " + nombre);
}

function Persona(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años");
    };
}

const persona1 = new Persona("Silvia", 22, "femenino");
const persona2 = new Persona("Sofia", 28, "femenino");
const persona3 = new Persona("Mateo", 30, "masculino");
const persona4 = new Persona("Helena", 19, "femenino");
const persona5 = new Persona("Tomas", 40, "masculino");

persona1.saludar();
persona2.saludar();
persona3.saludar();
persona4.saludar();
persona5.saludar();

alert("Bienvenida a la pagina de diseño web mas actualizada del pais!");
let consulta = confirm("¿Te puedo ayudar a encontrar el mejor diseño para tu empresa o negocio?");

if (consulta === true) {
    let diseño = prompt("¿Qué diseño te gustaría para tu nueva página web?");
    let negocio = prompt("Elegí tu tipo de negocio (automovilístico, emprendimiento, contabilidad, supermercado):");

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
}

const IVA = 1.22;

function calcularIva(importe) {
    let resultado = importe * IVA;
    alert("El importe final con IVA es: " + resultado);
}

calcularIva(200);