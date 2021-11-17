// import { useRouter } from "next/router";

const Pokemon = ({ pokemon }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return "Loading...";
  // }

  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="Pokemon {pokemon.name}"
          width={200}
          height={200}
        />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    "https://oleguer-pokemon.herokuapp.com/pokemon/" + params.id
  );
  const pokemon = await response.json();

  return {
    props: { pokemon },
  };
};

export default Pokemon;
