import { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";
import PokemonInfo from "../PokemonInfo/PokemonInfo"
//import getPokemonByNumber from "../../api/getPokemonByNumber";

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
<<<<<<< HEAD
        <div className="search_by_number_wrapper">
=======
        <div>
>>>>>>> 1092e324f8cef65af06b56047fdda8240f2c9e1b
            <Input onSearch={fubnction} onChangeValue={onChangeValue} placeholder="Enter pokemon number from 1 to 1025" label="Only numbers are accepted"></Input>
            <PokemonInfo data={pokemonInfoData} />
        </div>
    )
<<<<<<< HEAD
=======

}
>>>>>>> 1092e324f8cef65af06b56047fdda8240f2c9e1b

}
