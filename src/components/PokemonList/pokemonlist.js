import PokemonCard from "./pokemoncard"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonInfo from "../PokemonInfo/PokemonInfo"

const PokemonList = () => {

    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokeDex, setPokeDex] = useState()

    const pokeFunc = async ( url = 'https://pokeapi.co/api/v2/pokemon/') => {
        setLoading(true)
        const result = await axios.get(url);
        
        setPokeData(result.data.results);
        setNextUrl(result.data.next)
        setPrevUrl(result.data.previous)
        setLoading(false);

    }

    useEffect(() => {
        pokeFunc();
    }, [])

    return (
        <div>
            <div className="poke_grid_container">
                <PokemonCard pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
            </div>
            <div className="prev_next_div">
                <button className="prev_button" onClick={() => {
                    pokeFunc(prevUrl);
                }}>Previous</button>
                <button className="next_button" onClick={() => {
                    pokeFunc(nextUrl);
                }}
                >Next</button>
            </div>
            <PokemonInfo data={pokeDex} />
        </div>
    )
}

export default PokemonList