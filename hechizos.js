let $cardHechizos = document.querySelector(".container-hechizos");

fetch("/data.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    const hechizos = data.hechizos;

    hechizos.forEach((hechizo) => {
      $cardHechizos.innerHTML += `
                <div class="hechizos-card">
                  <div class="hechizos-cardContent card">
                    <h3>${hechizo.nombre}</h3>
                    <p>${hechizo.descripcion}</p>
                  </div>
                </div> `;
    });
  });
