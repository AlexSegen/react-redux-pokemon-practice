import React from 'react';
import { useSelector } from 'react-redux'

const ResultadoPokemon = () => {
    const {loading, pokemon, error} = useSelector(state => state.buscador);

    return ( 
        <div className="">
            <h3 className="text-dark">Resultado</h3>

            {loading && <div className="text-warning">Buscando...</div>}

            {
                pokemon.length > 0 && !error && <div className="text-success">
                <img src={pokemon[0].sprites.front_default} alt={pokemon[0].name} />
            <span>{pokemon[0].name}</span>
                </div>
            }

            {
                error &&  <span className="text-danger">{error}</span>
            }

        </div>
     );
}
 
export default ResultadoPokemon;