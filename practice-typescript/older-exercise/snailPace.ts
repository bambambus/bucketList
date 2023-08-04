const round = (numberToRound, digits = 0, toFixed = false) => {
  const precision = 10 ** digits;
  const n = numberToRound * precision * (1 + Number.EPSILON);
  const roundedNumber = Math.round(n) / precision;
  return toFixed ? roundedNumber.toFixed(digits) : roundedNumber;
};

export default function cockroachSpeed(s: number): number {
  let cmPerSecond = s * 27.7777777778;
  cmPerSecond = +round(cmPerSecond);
  return cmPerSecond;
}
