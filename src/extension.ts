import * as vscode from 'vscode';
import { typeStrategyMap } from './strategies/type-strategy.map';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('ng-gen.generate', async (uri: vscode.Uri) => {
    // Show quick pick for type
    const availableTypes = Array.from(typeStrategyMap.keys());
    const type = await vscode.window.showQuickPick(availableTypes, {
      placeHolder: 'Select what to generate',
    });
    if (!type) {
      vscode.window.showErrorMessage('You must select what to generate.');
      return;
    }

    // Ask user for name
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    const name = await vscode.window.showInputBox({
      prompt: `Enter Angular ${type} name`,
      placeHolder: `name`,
      validateInput: (value) => (value ? undefined : `${typeLabel} name required`),
    });
    if (!name) {
      vscode.window.showErrorMessage(`${typeLabel} name is required.`);
      return;
    }

    const strategy = typeStrategyMap.get(type);
    if (!strategy) {
      vscode.window.showErrorMessage(`Strategy for type '${type}' not found.`);
      return;
    }

    strategy.generate(uri, name);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
