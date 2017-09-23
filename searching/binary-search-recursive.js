function binarySearch(arr, key) {
    let midIndex = Math.floor(arr.length / 2)

    if(arr[midIndex] === key) return true
    else if(arr[midIndex] < key) return binarySearch(arr.splice(midIndex, arr.length), key)
    else if(arr[midIndex] > key) return binarySearch(arr.splice(0, midIndex), key)
    else return false
}

