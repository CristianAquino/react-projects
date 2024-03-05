import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { GifsLogo } from "@app/assets/gifsLogo";
import { Modal, SearchForm } from "..";
import { LogoLink, MainGifs } from "./styled-components";

export type LayoutGifsProps = {};

const LayoutGifs = ({}: LayoutGifsProps) => {
  return (
    <MainGifs>
      {/* SEO */}
      <Helmet>
        <title>Home | Gifs</title>
        <meta
          name="description"
          content="main page of the gifs project created by CRdev where a list of gifs is displayedpage principal of gifs"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/gifIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/gifIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/gifIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/gifIcon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      {/* PAGE */}
      <LogoLink to={"/proyects/gifs"} aria-label="link to gifs">
        <GifsLogo />
      </LogoLink>
      <SearchForm />
      <Modal />
      <Outlet />
    </MainGifs>
  );
};

export default LayoutGifs;
