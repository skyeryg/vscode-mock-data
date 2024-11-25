import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import Mock from 'mockjs'
import json5 from 'json5'
import type { ConfigType, UnitTypeLong } from 'dayjs'
import dayjs from 'dayjs'
import { entity } from './entity'
import { insertData } from './utils'

type UnitType = Exclude<UnitTypeLong, 'date' | 'millisecond'>

const formatMap: Record<UnitType, string> = {
  year: 'YYYY',
  month: 'YYYY-MM',
  day: 'YYYY-MM-DD',
  hour: 'YYYY-MM-DD HH',
  minute: 'YYYY-MM-DD HH:mm',
  second: 'YYYY-MM-DD HH:mm:ss',
}

Mock.Random.extend({
  dateRange(min: ConfigType, max: string, unit: UnitType = 'day', format: string | null | undefined = null) {
    format = format || formatMap[unit]
    const dateMin = dayjs(min)
    const dateMax = dayjs(max)
    const diff = dateMax.diff(dateMin, unit)

    const dates = []
    for (let i = 0; i <= diff; i++)
      dates.push(dateMin.add(i, unit).format(format))

    return dates
  },
})

export function activate(context: ExtensionContext) {
  const methods = Object.entries(entity).map(([methodName, method]) => ({
    label: methodName,
    detail: method.description,
  }))

  context.subscriptions.push(commands.registerCommand('vscode-mock-data.insert', async () => {
    const selectMethod = await window.showQuickPick(methods)
    if (!selectMethod)
      return

    insertData(() => Mock.Random[selectMethod.label](), true)
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
