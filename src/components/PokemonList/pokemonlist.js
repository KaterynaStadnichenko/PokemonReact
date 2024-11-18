import PokemonCard from "./pokemoncard"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonInfo from "../pokemoninfo/pokemoninfo"

const PokemonList=() =>{

    const [pokeData, setPokeData]=useState([])
    const [loading, setLoading]=useState(true)
    const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl]=useState()
    const [prevUrl, setPrevUrl]=useState()
    const [pokeDex, setPokeDex]=useState()

    const pokeFunc = async() => {
        setLoading(true)
        const result = await axios.get(url)
        // console.log(result.data.results)
        setNextUrl(result.data.next)
        setPrevUrl(result.data.previous)
        getPokemon(result.data.results)
        setLoading(false)
        console.log(pokeData)
    }

    const getPokemon=async(result)=>{
        result.map(async(item)=>{
            const res = await axios.get(item.url)
            // console.log(res.data)
            setPokeData(state=>{
                state=[...state,res.data]
                // state.sort((a,b) => a.id > b.id ? 1:-1)
                return state;
            })
        })
    }
    
    useEffect(()=>{
        pokeFunc();
    },[url])

    return(
        <div>
            <div className="poke_grid poke_grid_container">
                    <PokemonCard  pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                        
            </div>
            <div className="prev_next_div">
                <button className="prev_button" onClick={()=>{
                    setPokeData([])
                    setUrl(prevUrl)
                }}>Previous</button>
                <button className="next_button" onClick={()=>{
                    setPokeData([])
                    setUrl(nextUrl)
                }}
                >Next</button>
            </div>
            <PokemonInfo data={pokeDex}/>
       </div>
    )    
}

export default PokemonList