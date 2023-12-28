import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"

export const metadata = {
    title: 'Favorites',
    description: 'lorem ipsum'
}



export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2"> Pókemons Favoritos <small className="text-blue-500">Global State</small> </span>

            <PokemonGrid pokemons={[]} />
        </div>
    );
}