/**
 * @param {Array} arr1
 * @param {Array} arr2 array with same length, as arr1
 * @return {Array} new Array, which elements are Arrays, that stores pairs of
 *     elements with same index from arr1 and arr2
 */
export function zip(arr1, arr2) {
  return arr1.map((k, i) => [k, arr2[i]]);
}

/**
 * Simple and dirty copy. It doesn't work with: Date, undefined, function,
 *     NaN, RegExp and complex objects.
 * @param {Object} obj
 * @return {Object} copy of obj
 */
export function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}