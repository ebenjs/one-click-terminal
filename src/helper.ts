import { TerminalState } from "./extension.type";

export const toggleTerminalState = (currentTerminalState: TerminalState) => {
  if (currentTerminalState === TerminalState.Hidden) {
    currentTerminalState = TerminalState.Visible;
  } else {
    currentTerminalState = TerminalState.Hidden;
  }

  return currentTerminalState;
};
