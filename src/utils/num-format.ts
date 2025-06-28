export function formatNum(val: number, profix: string = '') {
  return `${val.toLocaleString()} ${profix}`;
}
