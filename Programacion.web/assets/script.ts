const form = document.getElementById("contactForm") as HTMLFormElement;
const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
  const correo = (document.getElementById("correo") as HTMLInputElement).value.trim();

  // Validaciones
  if (nombre === "") {
    mensaje.textContent = " El nombre no puede estar vacío.";
    mensaje.style.color = "red";
    return;
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  if (!correoValido) {
    mensaje.textContent = " El formato del correo no es válido.";
    mensaje.style.color = "red";
    return;
  }

  // Enviar al servidor Node.js
  const response = await fetch("http://localhost:3000/enviar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, correo })
  });

  if (response.ok) {
    mensaje.textContent = " Datos enviados correctamente.";
    mensaje.style.color = "green";
    form.reset();
  } else {
    mensaje.textContent = " Error al enviar los datos.";
    mensaje.style.color = "red";
  }
});
