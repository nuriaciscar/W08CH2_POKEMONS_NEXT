const SSRPage = ({ pokemonsList }) => {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li>{pokemon.name}</li>
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
