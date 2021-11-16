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
          pokemons.map((pokemon) => <li key={pokemon.id}>{pokemon.name}</li>)}
      </ul>
    </>
  );
};

export default Home;
