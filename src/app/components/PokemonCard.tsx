import Image from "next/image";
import Link from "next/link";

export interface PokemonProp {
  name: string;
  url: string;
}

interface Prop {
  pokemon: PokemonProp;
}

export const PokemonCard = ({ pokemon }: Prop) => {
  return (
      <div className="flex flex-col items-center py-12 text-black border rounded-lg font-medium w-60 px-2 hover:scale-110 duration-300 shadow-md cursor-pointer">
        <div className="relative w-full h-[20vh] flex items-center justify-center">
          <Image
            src={`https://img.pokemondb.net/artwork/${pokemon?.name}.jpg`}
            alt={`${pokemon?.name} photo`}
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <h1 className="text-lg pt-4">{pokemon?.name}</h1>
      </div>
  );
};
