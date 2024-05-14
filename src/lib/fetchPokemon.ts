"use server";

export const fetchPokemon = async (page: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`
  );

  const data = await response.json();

  return data.results;
};

export const fetchAllPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
  const data = await res.json();
  return data.results;
};