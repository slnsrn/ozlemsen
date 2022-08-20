import { useTranslation } from "next-i18next";
import { useState } from "react";

import { useGameContext } from "../context/GameContext";
import { GameState } from "../types";
import { PrimaryButton } from "./Button";
import Counter from "./Counter";
import GameResult from "./GameResult";
import NextIcon from "./icons/NextIcon";
import Logo from "./Logo";
import Modal from "./Modal";

const GameFinished = ({
  showGameResult = true,
}: {
  showGameResult?: boolean;
}) => {
  const { gameState } = useGameContext();
  const { t } = useTranslation();
  const [showResults, setShowResults] = useState(showGameResult);

  if (gameState !== GameState.FINISHED) return null;

  if (showResults) {
    return <GameResult onClose={() => setShowResults(false)} />;
  }

  return (
    <Modal open={true} widthClass="sm:max-w-lg sm:w-full">
      <div className="flex gap-12">
        <Logo />
        <div className="self-center flex flex-col gap-6">
          <div>
            <h2 className="mb-2 text-slate-700 dark:text-slate-200 text-lg">
              {t("nextGameIn")}
            </h2>
            <div className="p-2">
              <Counter />
            </div>
          </div>
          <PrimaryButton onPress={() => setShowResults(true)}>
            {t("showResults")}
            <NextIcon />
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default GameFinished;
