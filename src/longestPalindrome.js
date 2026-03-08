/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPalin = ''
  if (isPalindrome(s)) {
    return s
  }
  for (i = 0; i < s.length; i++) {
    for (j = i + 2; j < s.length; j++) {
      const subStr = s.substring(i, j)
      //console.log(' Substring ', subStr)
      if (isPalindrome(subStr)) {
        //console.log(' Palindrome ', subStr)
        if (subStr.length > longestPalin.length) {
          longestPalin = subStr
        }
      }
    }
  }
  return longestPalin
}
const isPalindrome = s => {
  const letters = s.split('')
  return s === letters.reverse().join('')
}
console.log(longestPalindrome('ABCDEEDCBA12XYZWWZYX')) // 'aba' or 'bab'
