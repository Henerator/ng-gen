import * as vscode from 'vscode';
import { GenerateStrategy } from './generate-strategy.interface';

export class ComponentStrategy implements GenerateStrategy {
  generate(uri: vscode.Uri, name: string): void {
    const config = vscode.workspace.getConfiguration('ng-gen');

    const prefix = config.get<string>('componentPrefix', 'app');
    const skipSpec = config.get<boolean>('skipSpec', false);
    const inlineTemplate = config.get<boolean>('inlineTemplate', false);
    const inlineStyle = config.get<boolean>('inlineStyle', false);

    const folderPath = uri.fsPath;
    const terminal = vscode.window.createTerminal('ng-gen');
    terminal.show();
    terminal.sendText(`cd "${folderPath}"`);

    const commands = [
      'npx ng generate component',
      name,
      `--prefix=${prefix}`,
      `--inline-template=${inlineTemplate}`,
      `--inline-style=${inlineStyle}`,
    ];

    if (skipSpec) {
      commands.push('--skip-tests');
    }

    terminal.sendText(commands.join(' '));
    vscode.window.showInformationMessage(`Generating Angular component '${name}' in ${folderPath}`);
  }
}
