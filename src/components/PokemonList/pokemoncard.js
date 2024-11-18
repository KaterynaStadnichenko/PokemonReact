const PokemonCard=({pokemon, loading, infoPokemon})=>{
    console.log(pokemon)
    return(
        <div className="poke_grid">
            {
            loading ? <h1>Loading</h1> : 
            pokemon.map((item) => {
                return(
                    <div className="poke_card" key={item.id} onClick={()=>infoPokemon(item)}>
                        <h2 className="poke_number">{item.id}</h2>
                        <img src={item.sprites.front_default} className="poke_img"/>
                        <p className="poke_name">{item.name}</p>
                    </div>  
                    )
                })
            }
            
        </div>
    )    
}

export default PokemonCard