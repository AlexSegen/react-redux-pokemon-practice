import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../store/actions/buscadorAction";

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  
  const searchPokemon = () => {
      dispatch(fetchPokemon(pokemonName))
  }

  return (
    <div className="form-group">
     <input
        className="form-control"
        type="text"
        onChange={(e) => setPokemonName(e.target.value)}
      />
       <button
        type="button"
        className="btn btn-primary m-3"
        onClick={() => searchPokemon()}
        
      >
        Buscar
      </button>
    </div>
  );
};

export default BuscadorPokemon;
