function swap(idx1, idx2, values) {
  const temp = values[idx1];
  values[idx1] = values[idx2];
  values[idx2] = temp;
}

function insertionSort(values) {
  const operations = [];

  for (let i = 1; i < values.length; i++) {

    let j = i;

    while (j > 0) {

      operations.push({
        type: "compare",
        index1: j - 1,
        index2: j,
      });

      if (values[j - 1] > values[j]) {

        operations.push({
          type: "swap",
          index1: j - 1,
          index2: j,
        });

        swap(j - 1, j, values);

      } else {

        break;

      }

      j--;
    }
  }

  return operations;
}

export default insertionSort;