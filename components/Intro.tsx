import { useTranslation } from "next-i18next";
import Image from "next/image";

import { useGameContext } from "../context/GameContext";
import { GameState } from "../types";
import { PrimaryButton } from "./Button";
import NextIcon from "./icons/NextIcon";
import LanguageSwitch from "./LanguageSwitch";
import Modal from "./Modal";

const Intro = () => {
  const { t } = useTranslation("common");
  const { startGame, gameState } = useGameContext();

  if (gameState !== GameState.READY) return null;

  return (
    <Modal open={true} onClose={startGame} widthClass="sm:max-w-lg sm:w-full">
      <LanguageSwitch />
      <div className="w-full text-center">
        <Image src="/logo.png" width={150} height={150} alt="duzzle" />
      </div>

      <div className="text-center self-center">
        <h3 className="text-lg leading-6 font-medium text-slate-800 dark:text-slate-200 mb-4">
          {t("introTitle")}
        </h3>
        <div className="text-base leading-6 text-slate-800 dark:text-slate-200 mb-6">
          {t("introText")}
        </div>
        <PrimaryButton onPress={startGame}>
          {t("start")}
          <NextIcon />
        </PrimaryButton>
      </div>
    </Modal>
  );
};

export default Intro;
