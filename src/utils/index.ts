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
