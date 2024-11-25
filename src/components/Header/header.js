import { Link } from "react-router-dom"
import logo from "./pok_logo.webp"
import { useState } from "react";
import HomePage from "../HomePage/HomePage";


const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const [route, setRoute] = useState(0);
  
  
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
                            <Link to={"home"} className="header_anc" onClick={() => handleRouteChange(0)}> HOME</Link>
                            <Link to={"pokemonlist"} className="header_anc" onClick={() => handleRouteChange(1)}> POKEMON LIST</Link>
                            <Link to={"searchbynumber"} className="header_anc" onClick={() => handleRouteChange(2)}> SEARCH BY NUMBER</Link>
                        </div>
                </div>
            </div>
        </div>
            <HomePage />
        </div>
    )
}

export default Header