interface ContactoForm {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  fecha: string;
}

function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarTelefono(telefono: string): boolean {
  return /^\d{10}$/.test(telefono);
}

function guardarContacto(datos: ContactoForm) {
  localStorage.setItem("contactoPizziatan", JSON.stringify(datos));
}

const form = document.getElementById("form-contacto") as HTMLFormElement;
const mensajeExito = document.getElementById("mensaje-exito") as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const telefono = (document.getElementById("telefono") as HTMLInputElement).value;
  const mensaje = (document.getElementById("mensaje") as HTMLTextAreaElement).value;

  if (!nombre || !email || !telefono || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  if (!validarEmail(email)) {
    alert("El email ingresado no es válido.");
    return;
  }
  if (!validarTelefono(telefono)) {
    alert("El teléfono debe tener 10 dígitos.");
    return;
  }

  const contacto: ContactoForm = { nombre, email, telefono, mensaje, fecha: new Date().toLocaleString() };
  guardarContacto(contacto);
  form.reset();

  // Mostrar mensaje en la página
  mensajeExito.style.display = "block";

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    mensajeExito.style.display = "none";
  }, 5000);
});
