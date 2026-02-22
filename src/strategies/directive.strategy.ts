import * as vscode from 'vscode';
import { GenerateStrategy } from './generate-strategy.interface';

export class DirectiveStrategy implements GenerateStrategy {
  generate(uri: vscode.Uri, name: string): void {
    const config = vscode.workspace.getConfiguration('ng-gen');
    const skipSpec = config.get<boolean>('skipSpec', false);
    const folderPath = uri.fsPath;
    const terminal = vscode.window.createTerminal('ng-gen');
    terminal.show();
    terminal.sendText(`cd "${folderPath}"`);

    const commands = ['npx ng generate directive', name];

    if (skipSpec) {
      commands.push('--skip-tests');
    }

    terminal.sendText(commands.join(' '));
    vscode.window.showInformationMessage(`Generating Angular directive '${name}' in ${folderPath}`);
  }
}
