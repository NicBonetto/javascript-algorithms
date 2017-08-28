function selectionSort(arr) {
  let smallest, temp

  for (let i = 0; i < arr.length; i++) {
    smallest = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j
    }
    temp = arr[i]
    arr[i] = arr[smallest]
    arr[smallest] = temp
  }
  return arr
}
