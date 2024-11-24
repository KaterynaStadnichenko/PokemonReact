import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import PokemonList from "../PokemonList/pokemonlist";
import HomePage from "../HomePage/HomePage";
// import Input from "../Input/Input";

export default function Layout(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}