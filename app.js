window.onload = function() {
    const form = document.querySelector('#form');
    const genre = document.querySelector('#genre');
    const container = document.querySelector('#container');
    let dataDiv = document.querySelector('#data');
    console.log(data);

        
    form.addEventListener('submit', function(){
     event.preventDefault();

    container.innerHTML = data.filter((filter) => {
        return filter.genre === genre.value;
    })
    .map((val) => {
        return `
        
        <h4 class="song">${val.song}</h4>
        <h5 class="song">${val.artist}</h5>
        <h5 class="song">${val.genre}</h5>
        <img src="${val.image}" width="50px"></img>                

        `
    });
    });





}

