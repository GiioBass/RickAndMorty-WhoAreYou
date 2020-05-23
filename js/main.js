
const button = document.getElementById('action');
const URL = 'https://rickandmortyapi.com/api/';

function main() {
    try{
        const resp = fetch(URL + `character`)
            .then(response => response.json())
            .then(data => data);
        console.log('Exitosa');
    }catch{
        console.error(error.message);
    }
}

main();