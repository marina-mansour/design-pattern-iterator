console.log("from generator");

function* generator(start = 0, end = 5, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const generate = generator(2, 4);
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

const spread = [...generator(2, 5)];
console.log(spread);

for (const value of generator(1, 3)) {
  console.log(value);
}
