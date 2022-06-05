## 1.0.2

`2022-05-22`

- 🐞 移除 `options.target` 的默认值，并将类型同步为非可选.
- 🐞 移除 `TPosition.directive` 与 `TDirective` 属性.
- 💄 在组件挂载时，默认获取一次 DOM 所在的位置

## 1.0.7

`2022-05-27`

- 🐞 移除 在组件挂载时，默认获取一次 DOM 所在的位置，似乎没有处于非 top:0, left:0 的场景

## 1.0.8

`2022-05-31`

- 💄 新增 `addScrollListener` 与 `removeScrollListener` 方法。

## 1.0.9

`2022-05-31`

- 🐞 移除 `options.target` 的可选链标识

## 1.0.10

`2022-05-31`

- 💄 新增 `options.manual` 用于初始化时判断是否需要自动监听滚动事件

## 1.0.11

`2022-05-31`

- 🐞 修复 `options.manual` 初始化时判断逻辑错误的问题


## 1.0.12

`2022-06-01`

- 🐞 修复 `options.manual` 在 useEffect 时机错误导致的多次 `onDestory`

## 1.0.13

`2022-06-05`

- 🐞 修复 `package.json` 中 `publish` 指令冲突的问题