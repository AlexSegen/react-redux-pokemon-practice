import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import CantidadPokemon from "./components/cantidadPokemon";
import CompraPokemon from "./components/compraPokemon";

import store from './store'
import { Provider } from "react-redux";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src="http://placehold.it/200x220"
                    alt="Pokemon"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <p>Buscador Pokemon</p>
          <BuscadorPokemon/>
        </div>
        <div className="col-sm-12">
            <ResultadoPokemon/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
