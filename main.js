let $cards = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    console.log(respuesta);
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    console.log(data);

    personajes.forEach((personaje) => {
      let img =
        personaje.image || "../proyecto-js-utn-master/assets/Images/hp.jpg";

      $cards.innerHTML += `
                  <div class="card">
                    <div>
                        <img src="${img}" alt="${personaje.name}">
                    </div>
                    <h3 class="card-name">${personaje.name}</h3>
                    <p class="card-gender">Género: ${personaje.gender}</p>
                    <p class="card-actor">Intérprete: ${personaje.actor}</p>
                  </div> `;
    });
  });
