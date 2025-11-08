// Interfaz para los datos del formulario
interface ContactoForm {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
    fecha: string;
}

// Validar formato de email
function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar formato de teléfono (10 dígitos)
function validarTelefono(telefono: string): boolean {
    const regex = /^[0-9]{10}$/;
    return regex.test(telefono);
}

// Guardar datos en localStorage
function guardarContacto(contacto: ContactoForm): void {
    const contactos = JSON.parse(localStorage.getItem("contactos") || "[]");
    contactos.push(contacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));
}

// Mostrar mensaje en pantalla
function mostrarMensaje(texto: string, tipo: "exito" | "error"): void {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = texto;
    mensajeDiv.className = tipo === "exito" ? "mensaje-exito" : "mensaje-error";
    document.body.appendChild(mensajeDiv);

    // Desaparece después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Escuchar envío del formulario
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const telefono = (document.getElementById("telefono") as HTMLInputElement).value.trim();
        const mensaje = (document.getElementById("mensaje") as HTMLTextAreaElement).value.trim();

        if (!nombre || !email || !telefono || !mensaje) {
            mostrarMensaje(" Todos los campos son obligatorios.", "error");
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensaje(" El formato del email no es válido.", "error");
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarMensaje(" El teléfono debe tener 10 dígitos.", "error");
            return;
        }

        const nuevoContacto: ContactoForm = {
            nombre,
            email,
            telefono,
            mensaje,
            fecha: new Date().toLocaleString(),
        };

        guardarContacto(nuevoContacto);
        form.reset();
        mostrarMensaje("¡Gracias por contactarnos! Te responderemos pronto.", "exito");
    });
});
