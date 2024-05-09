"use client";

import React, { useState } from "react";
import { PokemonCard, PokemonProp } from "./PokemonCard";
import { useRouter } from "next/navigation";
import { Load } from "./Load";
import Link from "next/link";

interface Data {
  name: string;
  url: string;
}

interface Props {
  data: Data[];
  all: Data[];
}

export const PokemonList = ({ data, all }: Props) => {
  const router = useRouter();

  const [pokemon, setPokemon] = useState<Data[]>(data);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = all.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePokemon = () => {
    if (filteredData) {
      setPokemon(filteredData);
      router.push(`?=search=${search}`);
    }
  };
  return (
    <div>
      <div className="h-[40vh] bg-black w-full flex flex-col gap-4 items-center justify-center mb-10">
        <Link href="/" passHref>
          <h1 className="text-yellow-300 font-medium text-6xl">Pokemon</h1>
        </Link>
        <div className="w-2/3 sm:w-1/2 flex items-center rounded-full overflow-hidden">
          <input
            className="w-full px-4 py-2"
            value={search}
            onChange={handleSearch}
          />
          <button
            className="px-4 py-2 bg-yellow-300 text-black font-medium"
            onClick={handlePokemon}
          >
            Search
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {pokemon.map((item: PokemonProp) => (
            <PokemonCard pokemon={item} />
          ))}
        </div>
        {!filteredData && <Load />}
      </div>
    </div>
  );
};
