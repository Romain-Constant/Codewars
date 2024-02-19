const values: { [key: string]: number } = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

export function score(word: string | undefined): number {
  let score: number = 0;

  if (word) {
    const lettersArray = word.toLowerCase().split("");
    for (let i = 0; i < lettersArray.length; i++) {
      let letter = lettersArray[i];
      score += values[letter];
    }
  }
  return score;
}
