import { useEffect, useState } from "react";

const Home = function () {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        "https://oleguer-pokemon.herokuapp.com/pokemon"
      );
      const pokemonsList = await response.json();
      setPokemons(pokemonsList);
    };
    getPokemons();
  }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt="{`Pokemon ${pokemon.name}`}"
                width={200}
                height={200}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
