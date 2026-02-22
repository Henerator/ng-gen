import * as vscode from 'vscode';

export interface GenerateStrategy {
  generate(uri: vscode.Uri, name: string): void;
}
