import { useState } from "react";
import Input from "../Input/Input";
import getPokemonByName from "../../api/getPokemonByName";

export default function CharacterSearch(){
    const [pokemonName, setPokemonName ] = useState("")
    // const [pokemonInfo, setPokemonInfo] = useState(null)
    

    const onChangeValue = event => {
        setPokemonName(event.target.value)
    } 

    const onSearch = () => {
        getPokemonByName(pokemonName)
    }

    return(
        <div>
           <Input 
           onSearch={onSearch} 
           onChangeValue={onChangeValue} 
           placeholder = 'Enter pokemon name' 
           label = 'Words should start from capital letter'
           />
        </div>
    )
}