const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = (offset = 0, limit = 0, signal) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    { signal }
  );
};
