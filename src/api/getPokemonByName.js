import axios from "axios";

const getPokemonByName = (pokemonName) => {

    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    axios.get(`${baseURL}/${pokemonName}`).then((response) => {
        console.log(response.data);
      });
}

export default getPokemonByName