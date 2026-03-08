const n = 5
const current = []
const traverse = start => {
  console.log(' \n Traverse ', start)
  for (let i = start; i <= 5; i++) {
    console.log(' Pushing ', i, ' to current ', current)
    current.push(i)
    traverse(i + 1)
    current.pop()
    console.log(' After popping ', current)
  }
  return current
}
console.log(traverse(1))
