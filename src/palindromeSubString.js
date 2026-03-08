/**
 * @param {string} str
 * @return {string | null}
 */
var longestPalindromeSubString = function (str) {
  if (!str || str.length < 2) return null

  let start = 0
  let maxLen = 1

  const expand = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--
      right++
    }
    return [left + 1, right - 1]
  }

  for (let i = 0; i < str.length; i++) {
    const [l1, r1] = expand(i, i)
    const len1 = r1 - l1 + 1
    if (len1 > maxLen) {
      start = l1
      maxLen = len1
    }

    const [l2, r2] = expand(i, i + 1)
    const len2 = r2 - l2 + 1
    if (len2 > maxLen) {
      start = l2
      maxLen = len2
    }
  }

  return maxLen > 1 ? str.substring(start, start + maxLen) : null
}

// Backward-compatible alias
var palindromeSubString = longestPalindromeSubString

console.log(longestPalindromeSubString('babad')) // bab or aba
console.log(longestPalindromeSubString('abc')) // null
console.log(longestPalindromeSubString('cbbd')) // bb
console.log(longestPalindromeSubString('forgeeksskeegfor')) // geeksskeeg

module.exports = { longestPalindromeSubString, palindromeSubString }
