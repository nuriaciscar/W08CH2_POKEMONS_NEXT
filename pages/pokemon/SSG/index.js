import Link from "next/link";

const SSGPage = ({ pokemonsList }) => {
  return (
    <>
      <ul className="pokemons">
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              href={{
                pathname: "SSG/[id]",
                query: { id: pokemon.id },
              }}
            >
              {pokemon.name}
            </Link>
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

export default SSGPage;

export const getStaticProps = async () => {
  const response = await fetch("https://oleguer-pokemon.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
  };
};
