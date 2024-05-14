"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const PokemonSearch = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePokemon = () => {
    router.push(`/pokemon-search?search=${search}`);
  };

  return (
    <div className="h-[40vh] bg-black w-full flex flex-col gap-4 items-center justify-center mb-10">
      <Link href="/" passHref>
        <h1 className="text-yellow-300 font-medium text-6xl">Pokemon</h1>
      </Link>
      <p className="text-white md:w-1/2 text-center">
        Demonstrates an infinite scroll feature... Powered by the{" "}
        <Link href="https://pokeapi.co/" className="underline text-blue-500">
          Pokemon API
        </Link>.
      </p>
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
  );
};
