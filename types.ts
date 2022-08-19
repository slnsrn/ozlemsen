export enum Status {
  INITIAL = "INITIAL",
  ACTIVE = "ACTIVE",
  PASSED = "PASSED",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
}

export type Question = {
  word: string;
  definition: string;
  status: Status;
  answer?: string;
  placeholder?: string;
  type?: string;
};

export type Duzzle = Record<number, Question>;

export enum GameState {
  "READY",
  "STARTED",
  "FINISHED",
}
