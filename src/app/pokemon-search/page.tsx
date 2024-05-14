import { fetchAllPokemon } from "@/lib/fetchPokemon";
import { PokemonSearch } from "../components/PokemonSearch";
import { PokemonSearchFeed } from "../components/PokemonSearchFeed";
import { Suspense } from "react";
import { Loading } from "../components/Loading";

const PokemonSearchPage = async () => {
  const fetchAll = await fetchAllPokemon();
  return (
    <Suspense fallback={<Loading />}>
      <main className="mx-auto h-full pb-8">
        <PokemonSearch />
        <PokemonSearchFeed data={fetchAll} />
      </main>
    </Suspense>
  );
};

export default PokemonSearchPage;
