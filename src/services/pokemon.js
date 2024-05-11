const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = (offset = 0, limit = 0) => {
  return fetch(`${baseUrl}?offset=${offset}&limit=${limit}`);
};
