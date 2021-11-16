import Link from "next/link";

const ISRPage = ({ pokemonsList }) => {
  return (
    <>
      <ul className="pokemons">
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              href={{
                pathname: "ISR/[id]",
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

export const getStaticProps = async () => {
  const response = await fetch("https://oleguer-pokemon.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
    // revalidate: 20,
  };
};

export default ISRPage;
