import dataApi from './api.js';

const button = document.getElementById('action');
const URL = 'https://rickandmortyapi.com/api/character';
const idRandom = () => {
    return Math.floor(Math.random() * 20);
}
const pageRandom = () => {
    return Math.floor(Math.random() * 30);
}
const showImg = false;

function main() {
    pressButton();
    imgFirstLoadPage();


}

function imgFirstLoadPage() {
    document.getElementById('loader').style.display = 'none';
    // document.getElementById('cardInfo').style.display = 'none';

    cardImg.innerHTML = `
        <img alt="..." class="card-img-top" src=" ../assets/img/eyes.png">
    `
}

function pressButton() {
    button.onclick = () => {
        document.getElementById('cardInfo').style.display = 'none';
        document.getElementById('loader').style.display = 'inline';
        document.getElementById('button').style.display = 'none';
        setTimeout(function () {
            showDataInView(URL, idRandom(), pageRandom());
        }, 1000);
    }
}

async function showDataInView(URL, id, pages) {

    const data = await dataApi(`${URL}/?page=${pages}`);
    document.getElementById('loader').style.display = 'none';
    document.getElementById('cardInfo').style.display = 'inline';
    document.getElementById('button').style.display = 'inline';
    conditionImageDeadOrAliveFilter(data, id);
    cardImg.innerHTML = `
        <img alt="..." class="card-img-top" src=" ${data.results[id].image}">
    `
    title.innerHTML = `
        <h5 class="card-title ">${data.results[id].name}</h5>
    `
    description.innerHTML = `
        <li class="list-group-item" style="padding: 0.2rem ">Status: ${data.results[id].status}</li>
        <li class="list-group-item" style="padding: 0.2rem ">Specie: ${data.results[id].species}</li>
        <li class="list-group-item" style="padding: 0.2rem ">Type: ${data.results[id].type}</li>
    `
}

function conditionImageDeadOrAliveFilter(data, id) {
    if (data.results[id].status == 'Dead') {
        document.getElementById('cardImg').style.filter = 'grayscale(100%)';
    } else {
        document.getElementById('cardImg').style.filter = 'grayscale(0%)';
    }
}


main();