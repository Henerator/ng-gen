import * as vscode from 'vscode';
import { GenerateStrategy } from './generate-strategy.interface';

export class ServiceStrategy implements GenerateStrategy {
  generate(uri: vscode.Uri, name: string): void {
    const config = vscode.workspace.getConfiguration('ng-gen');
    const prefix = config.get<string>('componentPrefix', 'app');
    const skipSpec = config.get<boolean>('skipSpec', false);
    const folderPath = uri.fsPath;
    const terminal = vscode.window.createTerminal('ng-gen');
    terminal.show();
    terminal.sendText(`cd "${folderPath}"`);

    const commands = ['npx ng generate service', name, `--prefix=${prefix}`];

    if (skipSpec) {
      commands.push('--skip-tests');
    }

    terminal.sendText(commands.join(' '));
    vscode.window.showInformationMessage(`Generating Angular service '${name}' in ${folderPath}`);
  }
}
