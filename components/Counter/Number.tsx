const digitSegments = [
  [1, 2, 3, 4, 5, 6],
  [2, 3],
  [1, 2, 7, 5, 4],
  [1, 2, 7, 3, 4],
  [6, 7, 2, 3],
  [1, 6, 7, 3, 4],
  [1, 6, 5, 4, 3, 7],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 7, 3, 6],
];

const Number = ({ currentNumber }: { currentNumber: number }) => (
  <div className="digit minutes">
    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
      <div
        key={n}
        className={`segment ${
          digitSegments[currentNumber].includes(n) ? "on" : ""
        }`}
      ></div>
    ))}
  </div>
);

export default Number;
