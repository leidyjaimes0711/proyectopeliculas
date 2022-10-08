document.addEventListener('DOMContentLoaded', ()=> {
    

    const peliculasContainer = document.querySelector('#peliculasContainer');
    const shuffle = (array) => {

        array.sort(() => Math.random() - 0.5);
    }

    fetch('./public/data/peliculas.json')
    .then(response => response.json())
    .then(data =>{

        shuffle(data);

        data.forEach(pelicula => {
            peliculasContainer.innerHTML += `
            <article class="col-4">
                <h2>${pelicula.nombre}</h2>
                <img src="./public/assets/${pelicula.id}.jpg" alt="" width="200" height="150">
                <p><strong>Director: </strong>${pelicula.director}</p>
                <p><strong>Clasificación: </strong>${pelicula.director}</p>
            
            </article>
            
            `
        });
    })


})