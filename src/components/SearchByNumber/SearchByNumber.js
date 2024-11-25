import { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";
import PokemonInfo from "../PokemonInfo/PokemonInfo"

export default function SearchByNumber() {

    const [pokemonNumber, setPokemonNumber] = useState("iflsfjeil");
    const [pokemonInfoData, setPokemonInfoData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getPokemonByNumber = (pokemonNumber) => {
        setLoading(true)

        const baseURL = "https://pokeapi.co/api/v2/pokemon/";

        axios.get(`${baseURL}/${pokemonNumber}`).then((response) => {
            setPokemonInfoData(response.data);
            setLoading(false)
        });
    }

    const onChangeValue = event => {
        setPokemonNumber(event.target.value)
    }

    const fubnction = () => {
        getPokemonByNumber(pokemonNumber);
    }

    return (
        <div className="search_by_number_wrapper">
            <Input onSearch={fubnction} onChangeValue={onChangeValue} placeholder="Enter pokemon number from 1 to 1025" label="Only numbers are accepted"></Input>
            <PokemonInfo data={pokemonInfoData} />
        </div>
    )};