import { Dialog } from "@headlessui/react";

import { useGameContext } from "../context/GameContext";
import { GameState, Question, Status } from "../types";
import BadgeCheck from "./icons/BadgeCheck";
import CheckIcon from "./icons/CheckIcon copy";
import MinusIcon from "./icons/MinusIcon";
import { Letters } from "./Letter";
import Modal from "./Modal";

const Result = ({
  question: q,
  letter,
}: {
  question: Question;
  letter: string;
}) => (
  <div className="flex">
    <div className="w-32">
      <span className="font-bold text-lg text-rose-400">{letter}</span>
      <span className="dark: dark:text-slate-200">
        {q.word?.substring(1, q.word?.length)}
      </span>
    </div>

    <span className="text-rose-400 mr-2">-</span>

    {q.status === Status.CORRECT ? (
      <span className="text-rose-400 ml-6">
        <CheckIcon />
      </span>
    ) : null}
    {q.status === Status.WRONG ? (
      <span className="text-slate-600  dark:text-slate-200">
        {q.answer ?? ""}
      </span>
    ) : null}
    {q.status === Status.PASSED ? (
      <span className="text-yellow-600 ml-6">
        <MinusIcon />
      </span>
    ) : null}
  </div>
);

const GameResult = ({ onClose }: { onClose: () => void }) => {
  const { duzzle, gameState } = useGameContext();
  if (gameState !== GameState.FINISHED) return null;

  const left = Array.from(
    { length: Math.ceil(Letters.length / 2) },
    (_, i) => i * 1
  );
  const right = Array.from(
    { length: Letters.length - left.length },
    (_, i) => (i + left.length) * 1
  );
  return (
    <Modal open={true} onClose={onClose}>
      <div className="hidden lg:flex mx-auto items-center justify-center h-12 w-12 rounded-full bg-rose-100 dark:bg-transparent text-rose-400">
        <BadgeCheck />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-slate-700 dark:text-slate-100"
        >
          Game result
        </Dialog.Title>
        <div className="mt-6">
          <div className="flex w-full text-left gap-4">
            <div className="w-1/2 text-left">
              {left.map((i) => (
                <Result
                  key={Letters[i]}
                  question={duzzle[i]}
                  letter={Letters[i]}
                />
              ))}
            </div>
            <div className="w-1/2 text-left">
              {right.map((i) => (
                <Result
                  key={Letters[i]}
                  question={duzzle[i]}
                  letter={Letters[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GameResult;
