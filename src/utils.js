/**
 * @param {Array} arr1
 * @param {Array} arr2 array with same length, as arr1
 * @return {Array} new Array, which elements are Arrays, that stores pairs of
 *     elements with same index from arr1 and arr2
 * @example
 * zip([1, 2, 3], [4, 5, 6])  // returns [ [1, 4], [2, 5], [3, 6] ]
 */
export function zip(arr1, arr2) {
  return arr1.map((k, i) => [k, arr2[i]])
}

/**
 * Simple and dirty copy. It doesn't work with: Date, undefined, function,
 *     NaN, RegExp and complex objects.
 * @param {Object} obj
 * @return {Object} copy of obj
 * @example
 * const a = {'first': 1, 'second': 2}
 * const b = copy(a)
 * a === b  // false
 * a.first === b.first && a.second === b.second  // true
 */
export function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}