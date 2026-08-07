function swap(idx1, idx2, values) {
  const temp = values[idx1];
  values[idx1] = values[idx2];
  values[idx2] = temp;
}

function partition(values, low, high, operations, sortOrder) {
  const pivot = values[high];

  operations.push({
    type: "pivot",
    index: high,
  });

  let i = low - 1;

  for (let j = low; j < high; j++) {
    operations.push({
      type: "compare",
      index1: j,
      index2: high,
    });

    if (
      (sortOrder === "ascending" && values[j] <= pivot) ||
      (sortOrder === "descending" && values[j] >= pivot)
    ) {
      i++;

      operations.push({
        type: "swap",
        index1: i,
        index2: j,
      });

      swap(i, j, values);
    }
  }

  operations.push({
    type: "swap",
    index1: i + 1,
    index2: high,
  });

  swap(i + 1, high, values);

  return i + 1;
}

function quickSortHelper(values, low, high, operations, sortOrder) {
  if (low >= high) return;

  const pivotIndex = partition(values, low, high, operations, sortOrder);

  quickSortHelper(values, low, pivotIndex - 1, operations, sortOrder);

  quickSortHelper(values, pivotIndex + 1, high, operations, sortOrder);
}

function quickSort(values, sortOrder) {
  const operations = [];

  quickSortHelper(values, 0, values.length - 1, operations, sortOrder);

  return operations;
}

export default quickSort;
