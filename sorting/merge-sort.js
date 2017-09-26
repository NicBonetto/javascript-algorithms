function mergeSort(arr) {
    if(arr.length < 2) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(arrLeft, arrRight) {
    const result = []
    let l = 0
    let r = 0

    while(arrLeft.length > l && arrRight.length > r) {
        if(arrLeft[l] < arrRight[r]) {
            result.push(arrLeft[l])
            l++
        }
        else {
            result.push(arrRight[r])
            r++
        }
    }
    return result.concat(arrLeft.slice(l)).concat(arrRight.slice(r))
}

