import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { GameState } from "../../types";

const GAME_TIME = 300;

const Timer = () => {
  const [seconds, setSeconds] = useState(GAME_TIME);
  const { finishGame, gameState, isMobile } = useGameContext();
  const r = isMobile ? 30 : 40;
  const circle = Math.PI * r * 2;

  useEffect(() => {
    let s = GAME_TIME;
    const counterInterval = setInterval(() => {
      if (s === 0) {
        clearInterval(counterInterval);
      }
      setSeconds(s--);
    }, 1000);

    () => {
      clearInterval(counterInterval);
    };
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      finishGame();
    }
  }, [finishGame, seconds]);

  if (gameState !== GameState.STARTED) return null;

  return (
    <div className="sm:absolute lg:relative top-10 w-full flex justify-center">
      <div className="w-[90px] h-[90px] mx-auto relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <span
            className={`self-center text-lg lg:text-2xl ${
              seconds < 30
                ? "text-amber-400"
                : "text-slate-600 dark:text-stone-200"
            }`}
          >
            {seconds}
          </span>
        </div>
        <svg width={90} height={90}>
          <circle
            strokeWidth={isMobile ? 6 : 8}
            stroke={seconds < 30 ? "#fcd34d" : "#e7e5e4"}
            fill="none"
            cx="45"
            cy="45"
            r={r}
          />
          <circle
            cx="45"
            cy="45"
            r={r}
            fill="none"
            strokeWidth={isMobile ? 6 : 8}
            strokeDasharray={circle}
            strokeDashoffset={-circle * ((GAME_TIME - seconds) / GAME_TIME)}
            stroke={seconds < 30 ? "#f87171" : "#475569"}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </div>
    </div>
  );
};
export default Timer;
