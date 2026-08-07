function merge(values, left, mid, right, operations, sortOrder) {
  const leftArray = values.slice(left, mid + 1);
  const rightArray = values.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {
    operations.push({
      type: "compare",
      index1: left + i,
      index2: mid + 1 + j,
    });

    if (
      (sortOrder === "ascending" && leftArray[i] <= rightArray[j]) ||
      (sortOrder === "descending" && leftArray[i] >= rightArray[j])
    ) {
      operations.push({
        type: "overwrite",
        index: k,
        value: leftArray[i],
      });

      values[k++] = leftArray[i++];
    } else {
      operations.push({
        type: "overwrite",
        index: k,
        value: rightArray[j],
      });

      values[k++] = rightArray[j++];
    }
  }

  while (i < leftArray.length) {
    operations.push({
      type: "overwrite",
      index: k,
      value: leftArray[i],
    });

    values[k++] = leftArray[i++];
  }

  while (j < rightArray.length) {
    operations.push({
      type: "overwrite",
      index: k,
      value: rightArray[j],
    });

    values[k++] = rightArray[j++];
  }
}

function mergeSortHelper(values, left, right, operations, sortOrder) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  mergeSortHelper(values, left, mid, operations, sortOrder);

  mergeSortHelper(values, mid + 1, right, operations, sortOrder);

  merge(values, left, mid, right, operations, sortOrder);
}

function mergeSort(values, sortOrder) {
  const operations = [];

  mergeSortHelper(values, 0, values.length - 1, operations, sortOrder);

  return operations;
}

export default mergeSort;
