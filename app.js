const API_KEY = 'ae53bcddc5b370b5b486d07ca3c8f8ba'

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    //montar texto
    let dados = JSON.parse (this.responseText);
    for(i=0; i < dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;



        texto = texto + `
            <div class="row">
                <div class="box-filme">
                    <img class="d-block mx-auto mt-4"src="https://image.tmdb.org/t/p/w500${filme.backdrop_path}" alt=""> <br>
                    <span class="title">${filme.title}</span> <br>
                    <span class="release-date">${filme.release_date.split('-').reverse().join('/')}</span> <br>
                    <span class="overview">${filme.overview}</span> <br>
                    <a class="btn btn-primary mb-3 mt-2" href="https://www.google.com/search?q=${filme.title}"> Saiba mais...</a> <br>
                </div>
            </div>
        `
    };

    //preencher div com textos

    divTela.innerHTML = texto;
}

function listarPopular () {
    let divTela = document.getElementById('tela');
    let texto = '';

    //montar texto
    let dados = JSON.parse (this.responseText);
    for(i=0; i < dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;



        texto = texto + `
            <div class="row">
                <div class="box-filme">
                    <img class="d-block mx-auto mt-4 border border-light rounded"src="https://image.tmdb.org/t/p/w500${filme.backdrop_path}" alt=""> <br>
                    <span class="title">${filme.title}</span> <br>
                    <span class="release-date">${filme.release_date.split('-').reverse().join('/')}</span> <br>
                    <span class="overview">${filme.overview}</span> <br>
                    <a class="btn btn-primary mb-3 mt-2" href="https://www.google.com/search?q=${filme.title}"> Saiba mais...</a> <br>
                </div>
            </div>
        `
    };

    //preencher div com textos

    divTela.innerHTML = texto;

}

function executaPesquisa (){
    let pesquisaInserida = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${pesquisaInserida}`)
    xhr.send ();
}

window.onload = () => {
    let newXhr = new XMLHttpRequest()
    newXhr.onload = listarPopular

    newXhr.open('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    newXhr.send();
}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa)