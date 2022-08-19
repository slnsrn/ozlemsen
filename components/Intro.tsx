import { Dialog } from "@headlessui/react";

import { useGameContext } from "../context/GameContext";
import { GameState } from "../types";
import { PrimaryButton } from "./Button";
import NextIcon from "./icons/NextIcon";
import Logo from "./Logo";
import Modal from "./Modal";

const Intro = () => {
  const { startGame, gameState } = useGameContext();

  if (gameState !== GameState.READY) return null;

  return (
    <Modal open={true} onClose={startGame} widthClass="sm:max-w-lg sm:w-full">
      <div className="flex gap-12">
        <Logo />
        <div className="mt-3 text-center sm:mt-5 self-center">
          <PrimaryButton onPress={startGame}>
            Start
            <NextIcon />
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default Intro;
