//@ts-ignore
import { fetchPokemon } from "@/lib/fetchPokemon";
//@ts-ignore
import { PokemonCard, PokemonProp } from "./components/PokemonCard";
//@ts-ignore
import { Load } from "./components/Load";

export default async function Home() {
  const data = await fetchPokemon(0);
  return (
    <main className="mx-auto">
      <div className="h-[40vh] bg-black w-full flex flex-col gap-4 items-center justify-center mb-10">
        <h1 className="text-yellow-300 font-medium text-6xl">Pokemon</h1>
        <div className="w-1/2">
          <input className="w-full px-4 py-2" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {data.map((item: PokemonProp) => (
            <PokemonCard pokemon={item} />
          ))}
        </div>
        <Load />
      </div>
    </main>
  );
}
