import axios from "axios";
import { startOfDay, isBefore } from "date-fns";
import { useRouter } from "next/router";
import PcgRandom from "pcg-random";
import { tdk } from "sozluk-api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Letters } from "../components/Letter";
import { words } from "../data";
import { defaultDuzzle } from "../data/defaultDuzzle";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Duzzle, GameState, Status, Locale } from "../types";

const today = new Date();
const seed = today.getDate() + today.getMonth() + today.getFullYear();
const rnd = new PcgRandom(seed);

// function makeState(): Duzzle {
//   return Letters.reduce((state, letter, i) => {
//     const word = words[i][Math.floor(rnd.number() * words[i].length)];
//     return {
//       ...state,
//       [i]: {
//         status: Status.INITIAL,
//         word: word,
//         definition: "",
//         placeholder: `${letter} ${
//           Array.from({ length: word.length - 1 }, (_) => "X").join
//         }`,
//       },
//     };
//   }, {} as Duzzle);
// }

type Context = {
  duzzle: Duzzle;
  gameState: GameState;
  startGame: () => void;
  finishGame: () => void;
  gameReady: () => void;
  setDuzzle: (duzzle: Duzzle) => void;
  isMobile: boolean;
  letters: string[];
};

export const GameContext = createContext<Context>(null!);
GameContext.displayName = "GameContext";

export const useGameContext = () => useContext(GameContext);

const GameContextProvider = ({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile: boolean;
}) => {
  const [duzzle, setDuzzle] = useState<Duzzle>(defaultDuzzle);
  const [savedDuzzle, saveDuzzle] = useLocalStorage("duzzle", null);
  const [gameFinishedAt, setGameFinishedAt] = useLocalStorage(
    "gameFinishedAt",
    null
  );
  const [gameState, setGameState] = useState<GameState>(GameState.READY);
  const router = useRouter();
  const language = router.locale as Locale;
  const letters = Letters[language];

  const setWord = (
    response: any,
    index: number,
    letter: string,
    word: string
  ) => {
    const data = response.data ?? [];
    setDuzzle((current) => ({
      ...current,
      [index]: {
        status: Status.INITIAL,
        word: word,
        type: data[0]?.meanings[0]?.partOfSpeech,
        definition: data[0]?.meanings[0]?.definitions[0]?.definition,
        placeholder: `${letter} ${Array.from(
          { length: word.length - 1 },
          (_) => "X"
        ).join(" ")}`,
      },
    }));
  };

  const setTRWord = (
    response: any,
    index: number,
    letter: string,
    word: string
  ) => {
    const data = response.data ?? [];
    setDuzzle((current) => ({
      ...current,
      [index]: {
        status: Status.INITIAL,
        word: word,
        definition: response.anlam,
        placeholder: `${letter} ${Array.from(
          { length: word.length - 1 },
          (_) => "X"
        ).join(" ")}`,
      },
    }));
  };

  function getDefinition(letter: string, index: number) {
    const word =
      words[language][index][
        Math.floor(rnd.number() * words[language][index].length)
      ];
    if (language === "tr") {
      return new Promise((resolve, reject) => {
        tdk(word)
          .then((response: { anlam: string }) =>
            setTRWord(response, index, letter, word)
          )
          .catch(() => {
            console.log(`${letters[index]} skipped: ${word}`);
            getDefinition(letter, index);
          });
      });
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => setWord(response, index, letter, word))
        .catch((err) => {
          console.log(`${letters[index]} skipped: ${word}`);
          getDefinition(letter, index);
        });
    });
  }

  useEffect(() => {
    const showNewGame =
      gameFinishedAt != null
        ? isBefore(new Date(gameFinishedAt), startOfDay(new Date()))
        : true;

    if (showNewGame) {
      setGameState(GameState.READY);
      Promise.all(letters.map((letter, i) => getDefinition(letter, i)));
      localStorage.clear();
    } else {
      setGameState(GameState.FINISHED);
      setDuzzle(savedDuzzle ?? defaultDuzzle);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startGame = () => setGameState(GameState.STARTED);
  const setGameReady = () => setGameState(GameState.READY);
  const finishGame = () => {
    if (gameState === GameState.FINISHED) return;
    setGameFinishedAt(new Date().toISOString());
    saveDuzzle(duzzle);
    setGameState(GameState.FINISHED);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        duzzle,
        startGame,
        finishGame,
        setDuzzle,
        isMobile,
        gameReady: setGameReady,
        letters: Letters[language],
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
