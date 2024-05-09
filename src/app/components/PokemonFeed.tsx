import { fetchPokemon, fetchAllPokemon } from "@/lib/fetchPokemon";
import { PokemonList } from "./PokemonList";

export const PokemonFeed = async () => {
  const data = await fetchPokemon(0);
  const all = await fetchAllPokemon();
  return (
    <section>
      <PokemonList data={data} all={all} />
    </section>
  );
};
