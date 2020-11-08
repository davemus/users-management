export function zip(arr1, arr2) {
  return arr1.map((k, i) => [k, arr2[i]]);
}

export function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}