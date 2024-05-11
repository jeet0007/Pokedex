import { useEffect, useState } from "react";

export const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [url]);

  return (
    <div>
      <h2>{name}</h2>
      <img src={pokemonData.sprites?.front_default} alt={name} />
    </div>
  );
};
