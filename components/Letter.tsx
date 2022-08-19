import { Status } from "../types";

const Letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const statusClass = {
  [Status.INITIAL]: " text-slate-500 border-slate-500 dark:text-slate-200",
  [Status.ACTIVE]:
    " bg-slate-500 border-slate-500 dark:border-slate-500 text-white",
  [Status.PASSED]: " bg-amber-200 border-amber-300 text-slate-700",
  [Status.CORRECT]: " bg-lime-400 border-lime-400 text-slate-700",
  [Status.WRONG]: " bg-red-600 border-red-600 text-white",
};

const Letter = ({ letter, status }: { letter: string; status: Status }) => (
  <div
    className={`flex w-8 h-8 lg:h-10 lg:w-10 border-2 rounded-full text-sm lg:text-base items-center justify-center ${statusClass[status]}`}
  >
    {letter}
  </div>
);

export default Letter;

export { Letters };
