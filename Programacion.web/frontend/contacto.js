// Esperar al envío del formulario
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validación simple
  if (!nombre || !email) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  // Enviar los datos al servidor
  const respuesta = await fetch("http://localhost:3000/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, telefono, mensaje }),
  });

  const resultado = await respuesta.json();
  console.log(resultado);

  // Mostrar mensaje de éxito
  document.getElementById("mensaje-exito").style.display = "block";
  e.target.reset();
});
