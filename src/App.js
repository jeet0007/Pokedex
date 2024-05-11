import { useState, useEffect } from "react";
import { getPokemon } from "./services/pokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon()
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {pokemon.map((poke, index) => (
          <PokemonCard key={index} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;
