function swap(idx1, idx2, values) {
  let temp = values[idx1];
  values[idx1] = values[idx2];
  values[idx2] = temp;
}

function bubbleSort(values, sortOrder) {
  const operations = [];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      operations.push({
        type: "compare",
        index1: j,
        index2: j + 1,
      });

      if (
        (sortOrder === "ascending" && values[j] > values[j + 1]) ||
        (sortOrder === "descending" && values[j] < values[j + 1])
      ) {
        operations.push({
          type: "swap",
          index1: j,
          index2: j + 1,
        });

        swap(j, j + 1, values);
      }
    }
  }

  return operations;
}

export default bubbleSort;
