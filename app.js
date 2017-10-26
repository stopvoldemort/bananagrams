

let letters = {
  " ": 4,
  a: 16,
  b: 4,
  c: 6,
  d: 8,
  e: 24,
  f: 4,
  g: 5,
  h: 5,
  i: 13,
  j: 2,
  k: 2,
  l: 7,
  m: 6,
  n: 13,
  o: 15,
  p: 4,
  q: 2,
  r: 13,
  s: 10,
  t: 15,
  u: 7,
  v: 3,
  w: 4,
  x: 2,
  y: 4,
  z: 2
}

let letterArray = []
for (let l in letters) {
  let times = letters[l]
  for (let i=0; i<times; i++) {
    letterArray.push(l.toUpperCase())
  }
}
