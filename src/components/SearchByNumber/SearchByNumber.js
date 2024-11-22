import { useState } from "react";
import Input from "../Input/Input";
import getPokemonByNumber from "../../api/getPokemonByNumber";

export default function SearchByNumber() {

    const [pokemonNumber, setPokemonNumber] = useState("iflsfjeil")
    const onChangeValue = event => {
        setPokemonNumber(event.target.value)
    } 

    const fubnction = () => {
        getPokemonByNumber(pokemonNumber)
    }

    return(     
        <div>
            <Input onSearch={fubnction} onChangeValue={onChangeValue} placeholder= "Enter pokemon number from 1 to 1025" label="Only numbers are accepted"></Input>
        </div>
    )
    
}

