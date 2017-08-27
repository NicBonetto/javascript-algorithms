function binarySearch(numbers, value) {
  let middle = Math.floor(numbers.length / 2)
  let right = numbers.length
  let left = 0

  while (left <= right) {
    let val = numbers[middle]

    if (val === value) return middle
    else if (val > value) right = middle - 1
    else left = middle + 1

    middle = Math.floor((left + right) / 2)
  }
  return -1
}
