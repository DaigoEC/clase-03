import { useState } from "react";

const pokeapi = "https://pokeapi.co/api/v2/pokemon/"

export function SearchPokemon () {
    const [search, setSearch] = useState("");
    const [pokemon, setpokemon] = useState<any>(null);

    const handleSearch = async () => {
        if (!search) return;
        const res = await fetch(pokeapi + search);
        const data = await res.json();
        setpokemon(data);
    };

    return (
        <div className="p-4 justify-center">
            <input 
                type="text" 
                placeholder="Buscar pokemon" 
                className="input input-bordered 
                input-accent w-full max-w-xs"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <button onClick={handleSearch} className="btn btn-success mx-4">
                Buscar
            </button>
            
            {pokemon ? (<div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ): null}
        </div>
    );
}