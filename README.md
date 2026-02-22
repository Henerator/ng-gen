# ng-gen

**ng‑gen** is a lightweight extension for generating Angular elements directly from the VS Code explorer.

It simplifies `ng generate` usage and enables creating components, services, and directives via the context menu.

---

## 🚀 Features

* **NgGen: generate** command in the explorer context menu (folder only).
* Executes the Angular CLI `npx ng generate` command with chosen type and name.
* Supports three types: **component**, **service**, **directive**.
* Configurable prefix (components/services) plus `skipSpec`, `inlineTemplate`, `inlineStyle` options.
* Opens an integrated terminal and shows notifications about generation progress.
* Quick access via Command Palette (`Ctrl+Shift+P` → *NgGen: generate*).

## 🛠 Requirements

* Node.js and npm must be installed.
* Angular CLI (available via `npx`).
* The workspace should be an Angular project; generation runs in the selected directory.
* VS Code version **1.109.0** or newer (specified in `engines.vscode`).

## 🎯 Usage

1. Open the root folder of your Angular project.
2. Right‑click a folder in Explorer and choose **NgGen: generate**.
3. Select the type of element (component, service or directive).
4. Enter a name for the item.
5. The command executes in a terminal and a notification appears once done.

> You can also invoke the command from the palette (`Ctrl+Shift+P`) without a folder selected; the current workspace folder will be used.

## ⚙️ Extension Settings

These settings are available under `File → Preferences → Settings` and the `ng-gen` namespace.

| Setting                    | Type    | Default      | Description                          |
|---------------------------|---------|--------------|--------------------------------------|
| `ng-gen.componentPrefix`  | string  | `app`        | Prefix for generated components      |
| `ng-gen.servicePrefix`    | string  | `app`        | Prefix for generated services        |
| `ng-gen.skipSpec`         | boolean | `false`      | Skip creating spec/test files        |
| `ng-gen.inlineTemplate`   | boolean | `false`      | Use inline template for components   |
| `ng-gen.inlineStyle`      | boolean | `false`      | Use inline style for components      |

## ❗ Known Issues

* Commands run via `npx`, so internet access is required on first run.
* Only three basic types are supported; extension can be extended if needed.
* If an existing terminal is busy, you may need to close it manually.

## 📝 Release Notes

### 0.0.1
*Initial release* — generate components, services and directives from the explorer.

---

Thank you for using **ng‑gen**! If you have suggestions or find bugs, please open an issue on GitHub.
