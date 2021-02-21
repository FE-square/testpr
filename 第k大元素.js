function getK(arr, K, i = 0, j = arr.length) {
    let [loc, start, end] = [i, i, j]
    while (i < j) {
        while (i < j && arr[j] <= arr[loc]) {
            j--
        }
        while (i < j && arr[i] >= arr[loc]) {
            i++
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i], arr[loc]] = [arr[loc], arr[i]]
    if (i + 1 === K) { return arr[i] }
    else if (i + 1 > K) { return getK(arr, K, start, i - 1) }
    else { return getK(arr, K, i + 1, end) }
}
getK([7, 4, 1, 8, 2, 9], 3)