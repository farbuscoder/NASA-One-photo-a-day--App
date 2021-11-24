window.addEventListener("load", obtenerDatos);
const titulo = document.getElementById("titulo");
const fecha = document.getElementById("fecha");
const descripcion = document.getElementById("descripcion");
const multimedia = document.getElementById("c_multimedia");
const info_container = document.getElementById("info-container");
const text_container = document.getElementById("text-container");

function obtenerDatos() {
  const nasa_api = "nl952GSI89Jto8dWBj9SYoULEtSExCQ6Glb8dZ0b";
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=nl952GSI89Jto8dWBj9SYoULEtSExCQ6Glb8dZ0b`;

  fetch(ruta)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data));
}

function mostrarDatos({ date, explanation, media_type, title, url }) {
  titulo.innerHTML = title;
  fecha.innerHTML = date;
  descripcion.innerHTML = explanation;
  if (media_type == "video") {
    multimedia.innerHTML = `
        <iframe class="embed-responsive-item" src="${url}"></iframe>
      `;
  } else {
    multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
  }
}

//Event listeners

multimedia.addEventListener("click", () => {
  multimedia.classList.toggle("zoom");
  info_container.classList.toggle("info-center");
  text_container.classList.toggle("hide");
});
