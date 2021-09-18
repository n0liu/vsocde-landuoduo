// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { data } from './dataType';

const process = require('process');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "landuoduo" is now active!');
	console.log('当前文件所在地址:', process.cwd());

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('landuoduo', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const index = Math.floor(Math.random() * 99 + 1);
		const _data = data[index];
		// vscode.window.showInformationMessage('Get Path from landuoduo!');
		vscode.window.showInformationMessage(`${_data}`);
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
