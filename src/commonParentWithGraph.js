class Node {
  value = null
  children = []
  constructor (from, to) {
    this.value = from
    this.children = []
    if (to !== null) {
      this.children.push(new Node(to, null))
    }
  }
}
Node.prototype.addChildren = function (to) {
  let newNode = new Node(to, null)
  this.children.push(newNode)
  return newNode
}
const dfs = head => {
  //console.log(' Head node  value', head.value)
  let current = head
  if (current === null) {
    return
  }

  current.children.forEach(child => {
    //console.log(' Child node ', child.value)
    dfs(child)
  })
  console.log('\n--Current node ', current.value)
}
const bfs = head => {
  //console.log(' Head node  value', head.value)
  let current = head
  if (current === null) {
    return
  }
  console.log('\n--Current node ', current.value)
  current.children.forEach(child => {
    //console.log(' Child node ', child.value)
    bfs(child)
  })
}
const findNode = (start, value) => {
  if (start === null) {
    return null
  }
  if (start.value === value) {
    return start
  }
  if (start.children == null) {
    return null
  }
  for (let i = 0; i < start.children.length; i++) {
    const node = findNode(start.children[i], value)
    if (node) {
      return node
    }
  }
  return null
}
const findParent = (start, value) => {
  if (start === null || start.value === value) {
    return null
  }
  if (start.value === value) {
    return start
  }
  if (start.children == null) {
    return null
  }
  for (let i = 0; i < start.children.length; i++) {
    if (start.children[i].value === value) {
      return start
    }
  }
  for (let i = 0; i < start.children.length; i++) {
    const node = findNode(start.children[i], value)
    if (node) {
      return node
    }
  }
  return null
}
const buildGraph = input => {
  let head = null
  if (!input || input.length === 0) return null
  for (let i = 0; i < input.length; i++) {
    let [from, to] = input[i]
    if (head === null) {
      head = new Node(from, to)
    } else {
      parent = findNode(head, from)
      if (parent !== null) {
        //console.log(' Adding ', to, ' to parent ', parent.value)
        parent.addChildren(to)
      }
    }
  }
  return head
}
let head = buildGraph([
  [1, 10],
  [1, 3],
  [3, 4],
  [4, 40],
  [4, 41],
  [3, 5],
  [5, 7],
  [7, 8],
  [8, 9],
  [1, 11]
])
//bfs(head)

input = [10, 4]
const node1 = findParent(head, input[0])
const node2 = findParent(head, input[1])
if (node1.value === node2.value) {
  console.log(' Common parent is ', node1.value)
} else {
  console.log(' No common parent found ')
}
