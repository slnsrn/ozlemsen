import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import Number from "./Number";

const Counter = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const { gameReady } = useGameContext();

  useEffect(() => {
    const counterInterval = setInterval(() => {
      const now = new Date();
      const hours = 24 - now.getHours();
      const minutes = 60 - now.getMinutes();
      const seconds = 60 - now.getSeconds();
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(counterInterval);
        gameReady();
      }
      setNumbers([
        Math.floor(hours / 10),
        hours % 10,
        Math.floor(minutes / 10),
        minutes % 10,
        Math.floor(seconds / 10),
        seconds % 10,
      ]);
    }, 1000);

    () => {
      clearInterval(counterInterval);
    };
  }, [gameReady]);

  return (
    <div className="relative p-6">
      <div className="clock flex">
        <Number currentNumber={numbers[0]} />
        <Number currentNumber={numbers[1]} />
        <div className="flex flex-col justify-center gap-2">
          <span className="w-1 h-1 rounded-full bg-rose-400"></span>
          <span className="w-1 h-1 rounded-full bg-rose-400"></span>
        </div>
        <Number currentNumber={numbers[2]} />
        <Number currentNumber={numbers[3]} />
        <div className="flex flex-col justify-center gap-2">
          <span className="w-1 h-1 rounded-full bg-rose-400"></span>
          <span className="w-1 h-1 rounded-full bg-rose-400"></span>
        </div>
        <Number currentNumber={numbers[4]} />
        <Number currentNumber={numbers[5]} />
      </div>
    </div>
  );
};

export default Counter;
