/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []

  const current = []
  const createCombination = start => {
    console.log(
      ' createCombination called with start ',
      start,
      ' current combination ',
      current
    )
    let i = start
    /*if (current.length <= k) {
      current.push(i)
      createCombination(i + 1)
    }*/
    for (let j = start; j <= n; j++) {
      console.log('\n\n Current combination before pushing', current, ' j ', j)
      current.push(j)
      console.log(
        ' Current combination after pushing ',
        current,
        ' calling createCombination with j+1 ',
        j + 1
      )
      createCombination(j + 1)
      current.pop()
      console.log(' Current combination after popping ', current, ' j ', j)
    }
  }
  createCombination(1)
  return result
}
console.log(' combine ', combine(4, 2)) // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

/*k =3

1
    1 2
        1 2 3
        1 2 4
    1 3
        1 3 4
2
    2 3
        2 3 4
    2 4
3
    3 4*/
