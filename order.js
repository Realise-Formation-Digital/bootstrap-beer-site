
function getText () {
    let pseudo;
    let commentaire;
    let quantite;
   

    pseudo = document.getElementById("pseudo");
    commentaire = document.getElementById("commentaires");
    quantite = document.getElementById("quantite");
    


    console.log (pseudo.value)
    console.log (commentaire.value)
    console.log (quantite.value)
}


async  function test{
    const result = await axios.get('https://api.punkapi.com/v2/
    ')
}