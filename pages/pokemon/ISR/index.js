import Link from "next/link";

const ISRPage = ({ pokemonsList }) => {
  return (
    <>
      <h1>Hello</h1>
      <ul>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default ISRPage;

export const getStaticProps = async () => {
  const response = await fetch("https://oleguer-pokemon.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
    revalidate: 20,
  };
};
