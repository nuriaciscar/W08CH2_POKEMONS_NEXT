import Image from "next/image";
const SSRPage = ({ pokemonsList }) => {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li key={pokemonsList.id}>
            <p>{pokemon.name} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SSRPage;

export const getServerSideProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
  };
};
