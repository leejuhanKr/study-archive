function* powerSets(arr) {
  yield [];
  for (let i = 0; i < arr.length; i++) {
    for (let rest of powerSets(arr.slice(i + 1))) {
      yield [arr[i], ...rest];
    }
  }
}

const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

const L = {}

L.range = function *(stop) {
  let i = -1
  while (++i < stop) yield i
}


L.filter = curry(function* (f, iter) {
  for (const el of iter) {
    if (f(el)) yield el;
  }
});

L.map = curry(function* (f, iter) {
  for (el of iter) yield f(el);
})

const take = curry(function (length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
})

const reduce = curry(function (f, acc, iter) {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const cur of iter) {
    acc = f(acc, cur);
  }
  return acc;
})

const add = (a, b) => a + b;
const go = (...as) => reduce((a, f) => f(a), as);

const arr = [1, 2, 3, 4, 5, 6];
console.log([...L.filter((el) => el % 2)(arr)]);
const f2 = (list, length) =>
  go(
    list,
    L.filter((a) => a % 2),
    L.map((a) => a * a),
    take(length),
    reduce(add)
  );

console.log(f2(arr, 3));

const addd = curry((a,b) => a+b)
console.log(addd(1,2))
console.log(addd(1)(2))

