import "../styles/globals.css";
import Link from "next/link";

const MyApp = function ({ Component, pageProps }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/pokemon">Pokemon</Link>
          <Link href="/pokemon/SSR">Pokemon SSR</Link>
        </li>
      </ul>
    </>
  );
};

export default MyApp;
