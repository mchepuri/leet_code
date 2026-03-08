/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr

  const pivotIndex = partition(arr, left, right)
  quickSort(arr, left, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, right)

  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }

  ;[arr[i], arr[right]] = [arr[right], arr[i]]
  return i
}

const nums = [10, 7, 8, 9, 1, 5]
console.log(quickSort(nums)) // [1, 5, 7, 8, 9, 10]

module.exports = quickSort
