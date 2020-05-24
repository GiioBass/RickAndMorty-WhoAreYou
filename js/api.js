
function dataApi(url) {
   return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log('Error: ', err);
        });
}

export default dataApi;

