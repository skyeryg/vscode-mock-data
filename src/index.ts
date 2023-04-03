import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import { Random, mock } from 'mockjs'
import { entity } from './entity'
import { insertData } from './utils'

export function activate(context: ExtensionContext) {
  const methods = Object.entries(entity).map(([methodName, method]) => ({
    label: methodName,
    detail: method.description,
  }))

  context.subscriptions.push(commands.registerCommand('vscode-mock-data.insert', async () => {
    const selectMethod = await window.showQuickPick(methods)
    if (!selectMethod)
      return

    insertData(() => Random[selectMethod.label](), true)
  }))

  context.subscriptions.push(commands.registerCommand('vscode-mock-data.generate', async () => {
    const editor = window.activeTextEditor
    const selectedText = editor?.document.getText(editor.selection)
    if (!selectedText)
      return

    const data = mock(JSON.parse(selectedText))
    const text = JSON.stringify(data, undefined, 2).replace(/"([^"]+)":/g, '$1:')

    insertData(text)
  }))
}

export function deactivate() {

}
