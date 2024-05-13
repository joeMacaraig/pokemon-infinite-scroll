"use client";

import React, { useState } from "react";
import { PokemonCard, PokemonProp } from "./PokemonCard";
import { PokemonSearch } from "./PokemonSearch";
import { useRouter } from "next/navigation";
import { Load } from "./Load";
import Link from "next/link";

interface Data {
  name: string;
  url: string;
}

interface Props {
  data: Data[];
}

export const PokemonList = ({ data }: Props) => {
  return (
    <div>
      <PokemonSearch />
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {data.map((item: PokemonProp, index: number) => (
            <PokemonCard pokemon={item} key={index} />
          ))}
        </div>
        <Load />
      </div>
    </div>
  );
};
