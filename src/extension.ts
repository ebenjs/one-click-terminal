import * as vscode from "vscode";
import { TerminalState } from "./extension.type";
import { toggleTerminalState } from "./helper";

let currentTerminalState = TerminalState.Hidden;

export function activate(context: vscode.ExtensionContext) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    -1
  );

  statusBarItem.command = "extension.toggleTerminal";

  statusBarItem.text = `$(terminal) Terminal`;
  statusBarItem.tooltip = "Click to show or hide the terminal";

  statusBarItem.show();

  const toggleTerminalCommand = vscode.commands.registerCommand(
    "extension.toggleTerminal",
    () => {
      currentTerminalState = toggleTerminalState(currentTerminalState);
      if (currentTerminalState === TerminalState.Hidden) {
        vscode.commands.executeCommand(
          "workbench.action.terminal.toggleTerminal"
        );
      } else {
        vscode.commands.executeCommand("workbench.action.closePanel");
      }
    }
  );

  context.subscriptions.push(statusBarItem);
  context.subscriptions.push(toggleTerminalCommand);
}

export function deactivate() {}
