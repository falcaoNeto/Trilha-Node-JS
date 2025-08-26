const pokemons = [
  { nome: "Bulbasaur", tipo: ["Grass", "Poison"] },
  { nome: "Charmander", tipo: ["Fire"] },
  { nome: "Squirtle", tipo: ["Water"] },
  { nome: "Pikachu", tipo: ["Electric"] },
  { nome: "Jigglypuff", tipo: ["Normal", "Fairy"] },
  { nome: "Meowth", tipo: ["Normal"] },
  { nome: "Psyduck", tipo: ["Water"] },
  { nome: "Machop", tipo: ["Fighting"] },
  { nome: "Geodude", tipo: ["Rock", "Ground"] },
  { nome: "Eevee", tipo: ["Normal"] }
];



const getPokemon = (request, response) => {

    length_list = pokemons.length
    
    if (request.params.id === undefined) {
        response.status(200).send(pokemons);
    }

    if (request.params.id < length_list && request.params.id >= 0) {
        response.status(200).send(pokemons[request.params.id]);
    }

    response.status(404).send('Pokemon não encontrado');
}


module.exports = {
    getPokemon
}