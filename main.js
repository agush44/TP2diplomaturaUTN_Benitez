let $cards = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    console.log(respuesta);
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;

    personajes.forEach((personaje) => {
      let img = personaje.image || "/assets/Images/sin-foto.jpg";
      let gender = personaje.gender;

      if (gender == "female") {
        gender = "Mujer";
      } else {
        gender = "Hombre";
      }

      $cards.innerHTML += `
                  <div class="card">
                    <div> 
                        <img src="${img}" alt="${personaje.name}">
                    </div>
                    <h3 class="card-name">${personaje.name}</h3>
                    <p class="card-gender">Género: ${gender}</p>
                    <p class="card-actor">Intérprete: ${personaje.actor}</p>
                  </div> `;
    });
  });
