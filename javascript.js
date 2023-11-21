function onClick(inputValue) {
    document.getElementById("displayedText").innerHTML = "Now I am in control";
    const user = {name: 'Bob'};
    console.log('Hello ' + user.name);hkmv

    const names = ['Sally', 'Jerome']
    const users = [{name: 'Sally'}, {name: 'Jerome'}]
    console.log ('First name in list -----',names[0]);

    console.log ('Second name in list of objects -----',users[1].name);
   const url = 'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 'success') {
            console.log(data.results.map(showNames));
        }
    });
     alert('Hello, ' + inputValue + '!');
}

function showNames(pokemon) {
    return pokemon.name
}