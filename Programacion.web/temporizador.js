let tiempo = 9;
let intervalo;
let barra = document.getElementById("barra");
let contador = document.getElementById("contador");
let mensaje = document.getElementById("mensaje");

function iniciarOferta() {
  mensaje.textContent = "";
  intervalo = setInterval(() => {
    if (tiempo > 0) {
      tiempo--;
      contador.textContent = tiempo;
      barra.style.width = `${(tiempo / 9) * 100}%`;
    } else {
      clearInterval(intervalo);
      mensaje.textContent = "🎉 Promoción finalizada 🎉";
    }
  }, 1000);
}

function detenerOferta() {
  clearInterval(intervalo);
  tiempo = 9;
  contador.textContent = tiempo;
  barra.style.width = "100%";
  mensaje.textContent = "";
}
