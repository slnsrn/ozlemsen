import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { PrimaryButton, SecondaryButton } from "./Button";
import NextIcon from "./icons/NextIcon";
import ReplyIcon from "./icons/ReplyIcon";
import Letter, { Letters } from "./Letter";
import Timer from "./Prosgress";
import { useGameContext } from "../context/GameContext";
import { GameState, Status, Locale } from "../types";

const Game = () => {
  const [current, setCurrent] = useState(0);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const { finishGame, duzzle, setDuzzle, gameState, letters } =
    useGameContext();
  const { t } = useTranslation();

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  const next = (current: number) => {
    for (let i = current + 1; i < letters.length + 1; i++) {
      if (i === letters.length) {
        i = 0;
      }
      if (i === current) {
        finishGame();
      }
      if (
        [Status.ACTIVE, Status.PASSED, Status.INITIAL].includes(
          duzzle[i].status
        )
      ) {
        setCurrent(i);
        break;
      }
    }
  };

  const saveAnswer = () => {
    if (gameState !== GameState.STARTED) return;

    if (textFieldRef.current === null) return;

    if (textFieldRef.current.value === "") {
      passLetter();
    } else {
      const currentQuestion = { ...duzzle[current] };
      currentQuestion.answer = textFieldRef.current.value;
      currentQuestion.status =
        currentQuestion.word.toLocaleLowerCase() ===
        textFieldRef.current.value.toLocaleLowerCase()
          ? Status.CORRECT
          : Status.WRONG;

      setDuzzle({ ...duzzle, [current]: currentQuestion });
      next(current);
      textFieldRef.current.value = "";
      textFieldRef.current.focus();
    }
  };

  const passLetter = () => {
    if (gameState !== GameState.STARTED) return;

    if (textFieldRef.current === null) return;

    const currentQuestion = { ...duzzle[current] };
    currentQuestion.status = Status.PASSED;

    setDuzzle({ ...duzzle, [current]: currentQuestion });
    next(current);
    textFieldRef.current.value = "";
    textFieldRef.current.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") {
      return;
    }

    saveAnswer();
  };

  return (
    <>
      {gameState === GameState.STARTED ? <Timer /> : null}
      <div className="w-full lg:mt-12 p-2 lg:p-12 flex justify-center">
        <div className="flex gap-2 flex-wrap justify-center">
          {letters.map((l, i) => (
            <Letter
              key={l}
              letter={l}
              status={
                duzzle
                  ? i === current
                    ? Status.ACTIVE
                    : duzzle[i]?.status
                  : Status.INITIAL
              }
            />
          ))}
        </div>
      </div>
      {gameState === GameState.STARTED ? (
        <div className="h-20 lg:h-32 text-sm lg:text-xl text-gray-600 dark:text-slate-200 text-center px-6 py-4 lg:px-20 flex flex-col">
          <span>{duzzle[current].definition}</span>
          {duzzle[current].type ? (
            <span>{`(${duzzle[current].type})`}</span>
          ) : null}
        </div>
      ) : null}
      <div className="flex w-full justify-center gap-2 px-4 lg:mb-40">
        <input
          id="answer"
          className="w-[400px] p-2 border-2 rounded-lg  border-rose-400 dark:border-slate-200 dark:text-slate-200 dark:bg-slate-500 focus:outline-rose-400 active:outline-rose-400 dark:active:outline-slate-700 dark:focus:outline-slate-700"
          aria-label={t("answer")}
          aria-labelledby={t("writeYourAnswer")}
          autoFocus
          ref={textFieldRef}
          onKeyDown={handleKeyDown}
          placeholder={duzzle[current].placeholder}
        />
        <PrimaryButton
          onPress={() => saveAnswer()}
          aria-labelledby={t("answer")}
        >
          <ReplyIcon />
        </PrimaryButton>
        <SecondaryButton onPress={passLetter} aria-labelledby={t("pass")}>
          <NextIcon />
        </SecondaryButton>
      </div>
    </>
  );
};

export default Game;
