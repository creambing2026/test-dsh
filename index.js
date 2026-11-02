/** 一些用于演示的小函数。 */

/** 把字符串首字母大写。 */
export function capitalize(text) {
  if (typeof text !== 'string' || text.length === 0) return ''
  return text[0].toUpperCase() + text.slice(1)
}

/** 计算数组元素之和。 */
export function sum(values) {
  return values.reduce((total, value) => total + value, 0)
}

/** 计算两数之差。 */
export function subtract(a, b) {
  return a - b
}

/** 计算两数之积。 */
export function multiply(a, b) {
  return a * b
}

/** 是否为偶数。 */
export function isEven(value) {
  return value % 2 === 0
}
