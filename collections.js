function* powerSets(arr) {
  yield []
  for (let i = 0; i < arr.length; i++) {
    for (let rest of powerSets(arr.slice(i + 1))) {
      yield [arr[i], ...rest]
    }
  }
}


