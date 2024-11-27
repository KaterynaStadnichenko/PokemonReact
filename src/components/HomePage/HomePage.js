import { Link } from "react-router-dom"

const HomePage = () => {
 
    return(
        <div className="home_page_wrapper ">
            <div className="container">
                <div className="home_page_content">
                    <div className="home_page_text_wrapper">
                        <div className="home_page_text">
                        <p className="home_page_p">HELLO! THIS PAGE IS DEDICATED TO EXPLORING POKÉMON AND THEIR ABILITIES.</p>
                        <p className="home_page_p">TO GET STARTED, PRESS ANY BUTTON BELOW AND SCROLL DOWN.</p>
                        </div>
                    </div>
                    <div className="home_page_nav_buttons">
                        <Link to="/pokemonlist" className="home_page_button">Pokemon List</Link>
                        <Link to="/SearchByNumber" className="home_page_button">Search By Number</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default HomePage