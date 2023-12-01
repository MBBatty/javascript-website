function onPress(inputName) {

   const url = 'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 'success') {
            const pokemonNames = data.results.map(showNames)
            console.log(pokemonNames);
            document.getElementById("displayedText").innerHTML = pokemonNames;
        }
    });
        
}

function showNames(pokemon) {
    return JSON.stringify(pokemon);
}