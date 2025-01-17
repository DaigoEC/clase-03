import { SearchPokemon } from "./components/SearchPokemon";
import { ThemeSwitch } from "./components/ThemeSwitch";

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">
      Pokedex App
    </h1>
    <SearchPokemon>
    </SearchPokemon>
      <ThemeSwitch/>
  </div>
  );
}

export default App
