import dataApi from './api.js';

const button = document.getElementById('action');
const URL = 'https://rickandmortyapi.com/api/character';
//characters less 19
const id = 1;
// pages less 29
const pages = 2;

function main() {
    getData();
}

async function getData() {
    const data = await dataApi(`${URL}/?page=${pages}`);
    title.innerHTML = `
        <h5 class="card-title ">${data.results[id].name}</h5>
    `
    description.innerHTML = `
        <li class="list-group-item" style="padding: 0.2rem ">Status: ${data.results[id].status}</li>
        <li class="list-group-item" style="padding: 0.2rem ">Specie: ${data.results[id].species}</li>
        <li class="list-group-item" style="padding: 0.2rem ">Type: ${data.results[id].type}</li>
    `
    cardImg.innerHTML = `
        <img alt="..." class="card-img-top" src=" ${data.results[id].image}">
    `
}

main();