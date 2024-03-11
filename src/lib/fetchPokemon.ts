"use server";

export const fetchPokemon = async (page: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`
  );

  const data = await response.json();

  return data.results;
};
