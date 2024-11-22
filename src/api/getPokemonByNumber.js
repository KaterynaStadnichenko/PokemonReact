import axios from "axios";

const getPokemonByNumber = (pokemonNumber) => {

    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    axios.get(`${baseURL}/${pokemonNumber}`).then((response) => {
        console.log(response.data);
      });
}

export default getPokemonByNumber