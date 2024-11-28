import axios from "axios";
import "../../style/pokemon_card.scss"

const PokemonCard = ({ pokemon, loading, infoPokemon }) => {

    const getPokemon = async (url) => {
        if (infoPokemon) {
            const res = await axios.get(url);
            infoPokemon(res.data);
        }

    }
    return (
        <div className="poke_grid">
            {
                loading ? <h1>Loading</h1> :
                    pokemon.map((item) => {
                        const pokemonIndex = item.url.split('/')[item.url.split('/').length - 2];
                        return (
                            <div className="poke_card" key={item.name} onClick={() => getPokemon(item.url)}>
                                <h2 className="poke_number">{item.id}</h2>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`} className="poke_img" alt="pokemon"/>
                                <p className="poke_name">{item.name}</p>
                            </div>
                        )
                    })
            }

        </div>
    )
}

export default PokemonCard