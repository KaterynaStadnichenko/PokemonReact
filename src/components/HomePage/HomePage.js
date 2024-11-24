import { Link } from "react-router-dom"
import { useState } from "react";

const HomePage = () => {
 
    return(
        <div className="home_page_wrapper ">
            <div className="container">
                <div>
                    <div className="home_page_text">
                        <p className="home_page_p">HELLO, THIS PAGE IS DEDICATED TO THE POKEMON SEARCH AND THEIR ABILITIES</p>
                        <p className="home_page_p">TO START THE PROCESS PLEASE PRESS ANY BUTTON BELOW</p>
                    </div>
                    <div className="home_page_nav_buttons">
                        <Link to="/pokemonlist" className="home_page_button">Pokemon List</Link>
                        <Link to="/SearchByNumber" className="home_page_button">Search By Number</Link>
                        <Link to="/charactersearch" className="home_page_button">Search By Name</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default HomePage