"use client";

import { useSearchParams } from "next/navigation";
import { PokemonCard, PokemonProp } from "./PokemonCard";

interface Data {
  name: string;
  url: string;
}

interface Props {
  data: Data[];
}

export const PokemonSearchFeed = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search?.toLowerCase() ?? "")
  );
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
        {filteredData.map((item: PokemonProp, index: number) => (
          <PokemonCard pokemon={item} key={index} />
        ))}
      </div>
      {filteredData.length === 0 && (
        <div className="items-center flex font-bold justify-center text-4xl text-center">
          No Pokemons Found! ☹️
        </div>
      )}
    </div>
  );
};
