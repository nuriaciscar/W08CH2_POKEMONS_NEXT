import Link from "next/link";

const SSRPage = ({ pokemonsList }) => {
  return (
    <>
      <ul className="pokemons">
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              href={{
                pathname: "SSR/[id]",
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

export default SSRPage;

export const getServerSideProps = async () => {
  const response = await fetch("https://oleguer-pokemon.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
  };
};
