import dayjs from 'dayjs'
import { window } from 'vscode'

export function insertData(data: string | (() => string), multiple = false) {
  try {
    const editor = window.activeTextEditor
    if (!editor) {
      window.showErrorMessage('Open a file to insert the data!')
      return
    }

    let resBuilder: any = data
    if (typeof data !== 'function')
      resBuilder = () => data

    editor.edit((editBuilder) => {
      if (multiple) {
        editor.selections.forEach((selection) => {
          const res = resBuilder()
          editBuilder.replace(selection, res.toString())
        })
      }
      else {
        const res = resBuilder()
        editBuilder.replace(editor.selection, res.toString())
      }
    })
  }
  catch (error) {
    throw new Error('Error on insert data')
  }
}

function runCode(code: string) {
  // eslint-disable-next-line no-new-func
  return Function(`return function(dayjs){return ${code}}`)()(dayjs)
}

export function parseDefaultValue(value?: string | number | boolean): string {
  const res = typeof value === 'string' ? value : JSON.stringify(value)
  if (res.startsWith('@'))
    return runCode(res.slice(1))

  else return res
}

function isNumber(value: string | number) {
  return !isNaN(Number(value))
}

export function parseInput(input?: string) {
  const data = input?.split(',')
  return data?.map((item) => {
    if (!item)
      return undefined

    if (isNumber(item))
      return Number(item)

    else return item
  })
}
