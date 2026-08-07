function swap(idx1, idx2, values) {
  const temp = values[idx1];
  values[idx1] = values[idx2];
  values[idx2] = temp;
}

function selectionSort(values, sortOrder) {
  const operations = [];

  for (let i = 0; i < values.length - 1; i++) {
    let minIndex = i;

    // Current minimum
    operations.push({
      type: "selectMin",
      index: minIndex,
    });

    for (let j = i + 1; j < values.length; j++) {
      operations.push({
        type: "compare",
        index1: minIndex,
        index2: j,
      });

      if (
        (sortOrder === "ascending" && values[j] < values[minIndex]) ||
        (sortOrder === "descending" && values[j] > values[minIndex])
      ) {
        minIndex = j;

        operations.push({
          type: "selectMin",
          index: minIndex,
        });
      }
    }

    if (minIndex !== i) {
      operations.push({
        type: "swap",
        index1: i,
        index2: minIndex,
      });

      swap(i, minIndex, values);
    }
  }

  return operations;
}

export default selectionSort;
