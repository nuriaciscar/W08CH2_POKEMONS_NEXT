import Image from "next/image";
import Link from "next/link";

const SSRPage = ({ pokemonsList }) => {
  return (
    <>
      <h1>Hello</h1>
      <ul>
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
