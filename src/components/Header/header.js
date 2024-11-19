// import {useState} from useState
import { Link } from "react-router-dom"
import logo from "./pok_logo.webp"
import { useState } from "react";
import Input from "../Input/Input";


const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const [route, setRoute] = useState(1); // Default route is 1
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    };
 
    return(
        <div>
        <div className="header">
            <div className="container">
                <div className='header_wrapper'>   
                    <a href="#" className="logo"><img src={logo} alt="Logo" className="header_logo"/></a>
                        <div className="header_nav">
                            <Link to={"randompokemon"} className="header_anc"> RANDOM POKEMON</Link>
                            <Link to={"searchbynumber"} className="header_anc" onClick={() => handleRouteChange(1)}> SEARCH BY NUMBER</Link>
                            <Link to={"charactersearch"} className="header_anc" onClick={() => handleRouteChange(2)}> CHARACTER SEARCH</Link>
                        </div>
                </div>
            </div>
            </div>
            <Input route={route} />
        </div>
        
        
    )
}
// 
export default Header