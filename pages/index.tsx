import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import { useState } from "react";
import Game from "../components/Game";
import GameFinished from "../components/GameFinished";
import Intro from "../components/Intro";
import Logo from "../components/Logo";
import { Meta } from "../components/Meta";
import GameContextProvider from "../context/GameContext";
import { Locale } from "../types";

const supportedLanguages = ["en", "tr"];
const Home = ({ isMobile = false }: { isMobile: boolean }) => {
  return (
    <div className="bg-background dark:bg-slate-700 p-4 relative h-screen min-h-screen overflow-hidden flex flex-col justify-around">
      <Meta />
      <Logo isMobile={isMobile} />
      <GameContextProvider isMobile={isMobile}>
        <Intro />
        <Game />
        <GameFinished />
      </GameContextProvider>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      isMobile,
      ...(await serverSideTranslations(context.locale ?? "en", ["common"])),
    },
  };
};
