let beers = [];

const fetchBeers = async () => {
    return await axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            const beers = response.data;
            console.log(`GET list users`, beers);
        })
        .catch(error => console.error(error));
};


beers = fetchBeers();
