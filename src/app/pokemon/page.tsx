import { fetchAllPokemon } from "@/lib/fetchPokemon";
import { PokemonSearch } from "../components/PokemonSearch";
import { PokemonSearchFeed } from "../components/PokemonSearchFeed";
import { useSearchParams } from "next/navigation";

const PokemonPage = async () => {
  const fetchAll = await fetchAllPokemon();
  return (
    <main className="mx-auto h-full pb-8">
      <PokemonSearch />
      <PokemonSearchFeed data={fetchAll}/>
    </main>
  );
};

export default PokemonPage;
