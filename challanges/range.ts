export default function range(end: number): Array<number>;
export default function range(
  start: number,
  end: number,
  step?: number,
): Array<number>;

export default function range(
  start: number = 0,
  end?: number,
  step: number = 1,
): Array<number> {
  throw 'Not implemented!';
}

const rangeNumber = range(1, 10);
console.log(rangeNumber);