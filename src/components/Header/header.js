import { Link } from "react-router-dom"
import logo from "./pok_logo.webp"
import { useState } from "react";
import "../../style/header.scss"


const Header = () => {
    // const [inputValue, setInputValue] = useState('');
    const [route, setRoute] = useState(0);
  
  
    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    };
 
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className='header_wrapper'>   
                        <img src={logo} alt="Logo" className="header_logo"/>
                            <div className="header_nav">
                                <Link to={""} className="header_anc" onClick={() => handleRouteChange(0)}> HOME</Link>
                                <Link to={"pokemonlist"} className="header_anc" onClick={() => handleRouteChange(1)}> POKEMON LIST</Link>
                                <Link to={"searchbynumber"} className="header_anc" onClick={() => handleRouteChange(2)}> SEARCH BY NUMBER</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header