"use client";

import { MdOutlineCatchingPokemon } from "react-icons/md";

export const Loading = () => {
  return (
    <div className="animate-pulse duration-500 ease-in-out flex items-center justify-center">
      <MdOutlineCatchingPokemon size={50} />
    </div>
  );
};
