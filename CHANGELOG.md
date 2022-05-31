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