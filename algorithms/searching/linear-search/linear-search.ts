export function linearSearch<T = number>(list: T[], value: T) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) return i;
  }

  return -1;
}
