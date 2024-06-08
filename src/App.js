import { useState, useEffect } from "react";
import { getPokemon } from "./services/pokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 30;
  const [count, setCount] = useState(20);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  const nextPage = () => setOffset(Math.min(offset + limit, count - limit));
  const prevPage = () => setOffset(Math.max(offset - limit, 0));

  useEffect(() => {
    console.log("Fetching data...");
    const controller = new AbortController();
    const { signal } = controller;
    getPokemon(offset, limit, signal)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setCount(data.count);
        setHasNext(data.next);
        setHasPrev(data.previous);
      });
  }, [offset, limit, pokemon.length]);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <div>
        <div className="flex items-center mb-4 justify-around">
          <button
            onClick={prevPage}
            disabled={!hasPrev}
            className={!hasPrev ? "btn btn-disabled" : "btn"}
          >
            ⬅️
          </button>
          <p>
            Showing <b>{offset + 1}</b> - <b>{offset + pokemon.length}</b> of{" "}
            {count}
          </p>
          <button
            onClick={nextPage}
            disabled={!hasNext}
            className={!hasNext ? "btn btn-disabled" : "btn"}
          >
            ➡️
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;
