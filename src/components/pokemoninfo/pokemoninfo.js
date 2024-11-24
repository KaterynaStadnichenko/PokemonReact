const PokemonInfo = ({ data }) => {
    return (
        <div>
            {!data ? (
            ""
            ) : (
            <div className="pokeInfo_div">
                <h2 className="pokeInfo_text">{data.id}</h2>
                <h1 className="pokeInfo_text">{data.name}</h1>
                    <div className="pokeInfo_img_wrapper">
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt="pokemon"
                        className="pokeInfo_img"
                        />
                    </div>
                <div className="pokemon_abilities">
                {data.abilities.map((poke) => {
                    return <h3 className="pokemon_abilities_text">{poke.ability.name}</h3>;
                })}
                <div className="base-stat">
                    {data.stats.map((poke) => {
                    return (
                        <>
                        <h3 className="base-stat_text">
                            {poke.stat.name}:{poke.base_stat}
                        </h3>
                        </>
                    );
                    })}
                </div>
                <div className="description"></div>
                
                </div>
            </div>
            )}
        </div>
    );
  };
  export default PokemonInfo;