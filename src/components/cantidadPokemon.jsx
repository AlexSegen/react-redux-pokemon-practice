import React from 'react';
import { useSelector } from 'react-redux'

const CantidadPokemon = () => {
    const {pokemon} = useSelector(state => state.games_shop);
    
    return ( 
        <>
        Unidades: {pokemon}
        </>
     );
}

export default CantidadPokemon;