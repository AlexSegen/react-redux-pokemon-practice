import React from 'react';

const ResultadoPokemon = () => {
    return ( 
        <div className="">
            <h3 className="text-dark">Resultado</h3>
            <div className="text-warning">Buscando...</div>
            <div className="text-success">
                <img src="" alt="" />
                <span>Pikachu</span>
            </div>
            <span className="text-danger">Error</span>

        </div>
     );
}
 
export default ResultadoPokemon;