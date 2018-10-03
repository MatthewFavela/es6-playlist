window.onload = function () {
    const form = document.querySelector('#form');
    const genre = document.querySelector('#genre');
    const container = document.querySelector('#container');
    let dataDiv = document.querySelector('#data');
    console.log(data);


    form.addEventListener('submit', function () {
        event.preventDefault();

        container.innerHTML = data.filter((filter) => {
                return filter.genre === genre.value;
            })
            .map((val) => {
                return `
        
        <h4 id="song">${val.song}</h4>
        <h5 id="artist">${val.artist}</h5>
        <h5 id="genre">${val.genre}</h5>
        <img id="image" src="${val.image}" width='100px' height='100px'></img>   
                
        `
            });
    });





}