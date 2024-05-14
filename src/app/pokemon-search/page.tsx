import { fetchAllPokemon } from "@/lib/fetchPokemon";
import { PokemonSearch } from "../components/PokemonSearch";
import { PokemonSearchFeed } from "../components/PokemonSearchFeed";
import { useSearchParams } from "next/navigation";

const PokemonSearchPage = async () => {
  const fetchAll = await fetchAllPokemon();
  return (
    <main className="mx-auto h-full pb-8">
      <PokemonSearch />
      <PokemonSearchFeed data={fetchAll} />
    </main>
  );
};

export default PokemonSearchPage;
