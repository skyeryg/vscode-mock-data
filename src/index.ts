import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import Mock from 'mockjs'
import json5 from 'json5'
import { entity } from './entity'
import { insertData, parseDefaultValue, parseInput } from './utils'
import { dateBetween, dateRange } from './utils/mock'

Mock.Random.extend({
  dateBetween,
  dateRange,
})

export function activate(context: ExtensionContext) {
  const methods = Object.entries(entity).map(([methodName, method]) => {
    const { description, ...others } = method
    return {
      label: methodName,
      detail: description,
      ...others,
    }
  })

  context.subscriptions.push(commands.registerCommand('vscode-mock-data.insert', async () => {
    const selectMethod = await window.showQuickPick(methods)
    if (!selectMethod)
      return

    if (selectMethod.args) {
      const options = Object.values(selectMethod.args).map((item) => {
        const option: { description?: string; default?: string } = {}
        if (typeof item === 'object') {
          option.description = item.description
          option.default = parseDefaultValue(item.default)
        }
        else {
          option.description = item
        }
        return option
      })
      const input = await window.showInputBox({
        title: selectMethod.label,
        prompt: options.map(item => item.description).join('||'),
        value: options.map(item => item.default).join(','),
      })

      // return
      insertData(() => json5.stringify(Mock.Random[selectMethod.label](...parseInput(input) || [])), true)
    }
    else {
      insertData(() => json5.stringify(Mock.Random[selectMethod.label]()), true)
    }
  }))

  context.subscriptions.push(commands.registerCommand('vscode-mock-data.generate', async () => {
    const editor = window.activeTextEditor
    const selectedText = editor?.document.getText(editor.selection)
    if (!selectedText)
      return

    const template = json5.parse(selectedText)
    const data = Mock.mock(template)
    const text = json5.stringify(data, undefined, 2) // .replace(/"([^"]+)":/g, '$1:')

    insertData(text)
  }))
}

export function deactivate() {

}
