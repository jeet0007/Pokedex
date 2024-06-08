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
    <div className="card mx-5">
      <div>
        <img
          src={
            pokemonData.sprites?.other["official-artwork"].front_default ||
            "https://via.placeholder.com/150"
          }
          loading="eager"
          alt="Avatar"
          width={"100%"}
          className="bg-gray-100"
        />
        <div class="container">
          <h4>
            <b>{name}</b>
          </h4>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};
