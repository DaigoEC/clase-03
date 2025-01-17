import { SearchPokemon } from "./components/SearchPokemon";

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">
      Pokedex App
    </h1>
    <SearchPokemon>
      
    </SearchPokemon>
  </div>
  );
}

export default App
