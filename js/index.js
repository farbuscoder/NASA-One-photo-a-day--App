window.addEventListener("load", obtenerDatos);

function obtenerDatos() {
  const nasa_api = "nl952GSI89Jto8dWBj9SYoULEtSExCQ6Glb8dZ0b";
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=nl952GSI89Jto8dWBj9SYoULEtSExCQ6Glb8dZ0b`;

  fetch(ruta)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data));
}

function mostrarDatos({ date, explanation, media_type, title, url }) {
  const titulo = document.getElementById("titulo");
  const fecha = document.getElementById("fecha");

  const descripcion = document.getElementById("descripcion");
  const multimedia = document.getElementById("c_multimedia");
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
