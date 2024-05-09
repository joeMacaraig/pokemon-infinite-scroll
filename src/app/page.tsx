import { PokemonFeed } from "./components/PokemonFeed";

export default async function Home() {
  return (
    <main className="mx-auto h-full pb-8">
      <PokemonFeed />
    </main>
  );
}
