export default function smallestNumInArray(list: number[]): number {
  // let result = list[0];
  let result;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < result) {
      result = list[i];
    }
  }
  return result;
}
