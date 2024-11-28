# vscode-mock-data

<a href="https://marketplace.visualstudio.com/items?itemName=skyeryg.vscode-mock-data" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/skyeryg.vscode-mock-data.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

基于`mockjs` 生成模拟数据。支持 `json5` 语法

## Features

### 插入模拟数据

`ctrl+shift+p` 选择`Mock Data: Insert Mock Data` 选择对应的`mockjs`指令插入模拟数据

### 根据 `json template` 生成模拟数据

选中模板，`ctrl+shift+p` 选择`Mock Data: Generate Mock Data From Select Schema`

### 增强
添加 mock 方法 `dateRange`,`dateBetween`

#### dateRanage

获取指定时间开始的时间列表
参数：
  - `start`: 开始时间，默认为当前时间
  - `length`: 长度，默认为10
  - `unit`: 单位，默认为`day` 可选值：`second`、`minute`、`hour`、`day`、`week`、`month`、`year`
  - `format`: 时间格式，默认为空，根据时间单位自动转换

#### dateBetween

获取指定开始时间和结束时间之间的时间列表
参数：
  - `start`: 开始时间，默认为当前时间
  - `end`: 结束时间，默认为当前时间`+10 unit`后的时间
  - `unit`: 单位，默认为`day` 可选值：`second`、`minute`、`hour`、`day`、`week`、`month`、`year`
  - `format`: 时间格式，默认为空，根据时间单位自动转换

## License

[MIT](./LICENSE) License © 2022 [Skyer](https://github.com/skyeryg)
