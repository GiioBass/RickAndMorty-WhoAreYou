

function getDataApi(url){
    const response = fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

export default connApi;

