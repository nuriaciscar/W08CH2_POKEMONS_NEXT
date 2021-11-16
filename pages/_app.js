import "../styles/globals.css";
import Link from "next/link";

const MyApp = function ({ Component, pageProps }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/pokemon/CSR">Pokemon</Link>
        </li>
        <li>
          <Link href="/pokemon/SSR">Pokemon SSR</Link>
        </li>
        <li>
          <Link href="/pokemon/SSG">Pokemon SSG</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
