'use client'
import { PokemonGrid } from "./PokemonGrid"
import { useAppSelector } from "@/store";
import { useState } from "react";

import { IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {
    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

    //const [pokemons, setPokemons] = useState(favoritesPokemons)

    return (
        <>

            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonGrid pokemons={favoritesPokemons} />)
            }


        </>
    )
}


export const NoFavorites = () => {

    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-800" />
            <span>No hay Favoritos</span>
        </div>
    )
}