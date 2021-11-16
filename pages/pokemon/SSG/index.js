const SSGPage = ({ pokemonsList }) => {
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

export default SSGPage;

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsList = await response.json();

  return {
    props: { pokemonsList },
  };
};
