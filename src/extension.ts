import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-bounce-marks" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-bounce-marks.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-bounce-marks!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
