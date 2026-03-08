/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
 

Constraints:

1 <= n <= 20
1 <= k <= n
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const current = []

  function backtrack (start) {
    console.log(
      'Backtracking with start:',
      start,
      'current combination:',
      current
    )
    if (current.length === k) {
      result.push([...current])
      return
    }

    for (let i = start; i <= n; i++) {
      current.push(i)
      console.log('Current combination:', current)
      backtrack(i + 1)
      current.pop()
      console.log('Current combination:', current)
    }
  }

  backtrack(1)
  return result
}

/*n=4, k=2

backTrack(1)
1-4
current = [1]
//still 2, 3 & 4 remains
called   backTrack(2)
    
    backTrack(2) start 2
    current = [1,2]
    //still 3 & 4 remains
    called   backTrack(3)

        backTrack(3)
        result = [[1,2]]
        current = [1] //return

    called   backTrack(4) //from 62 line
        
        backTrack(4)

        
*/
console.log(combine(5, 4)) // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
