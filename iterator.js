console.log("from iterator");

function generator(start = 0, end = 5, step = 1) {
  let nextIndex = start;
  return {
    next() {
      if (nextIndex <= end) {
        let result = { value: nextIndex, done: false };
        nextIndex += step;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
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
