async function getBeers() {

    let beers = [];

    beers = await axios.get('https://api.punkapi.com/v2/beers')

    console.log(beers)

}
getBeers();

