import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "one-click-terminal" is now active!');

	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusBarItem.command = 'workbench.action.terminal.toggleTerminal';
	statusBarItem.text = '$(terminal) Open Terminal';
	statusBarItem.tooltip = 'Open Terminal';
	statusBarItem.show();

	context.subscriptions.push(statusBarItem);
}

// This method is called when your extension is deactivated
export function deactivate() {}
