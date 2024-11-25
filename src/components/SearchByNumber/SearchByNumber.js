import { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";
import PokemonInfo from "../PokemonInfo/PokemonInfo";


export default function SearchByNumber() {
    const [pokemonNumber, setPokemonNumber] = useState("");
    const [pokemonInfoData, setPokemonInfoData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPokemonByNumber = (pokemonNumber) => {
        setLoading(true);
        setError(null); // Clear any previous errors

        const baseURL = "https://pokeapi.co/api/v2/pokemon/";

        axios.get(`${baseURL}/${pokemonNumber}`)
            .then((response) => {
                setPokemonInfoData(response.data);
            })
            .catch((error) => {
                setError("Failed to fetch Pokemon data. Please try again.");
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const onChangeValue = (event) => {
        setPokemonNumber(event.target.value);
    };

    const handleSearch = () => {
        getPokemonByNumber(pokemonNumber);
    };

    return (
        <div className="search_by_number_wrapper">
            <Input
                onSearch={handleSearch}
                onChangeValue={onChangeValue}
                placeholder="Enter pokemon number from 1 to 1025"
                label="Only numbers are accepted"
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {/* <PokemonInfo data={pokemonInfoData} /> */}
            <PokemonInfo data={pokemonInfoData} />
        </div>
    );
}