class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  getAt(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    let i = 0
    while (i < index) {
      current = current.next
      i++
    }
    return current
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      this.prepend(value)
      return true
    }
    if (index === this.length) {
      this.append(value)
      return true
    }

    const prev = this.getAt(index - 1)
    const node = new Node(value)
    node.next = prev.next
    prev.next = node
    this.length++
    return true
  }

  deleteAt(index) {
    if (index < 0 || index >= this.length) return null

    let removed

    if (index === 0) {
      removed = this.head
      this.head = this.head.next
      if (this.length === 1) {
        this.tail = null
      }
      this.length--
      return removed.value
    }

    const prev = this.getAt(index - 1)
    removed = prev.next
    prev.next = removed.next

    if (index === this.length - 1) {
      this.tail = prev
    }

    this.length--
    return removed.value
  }

  deleteByValue(value) {
    if (this.isEmpty()) return false

    if (this.head.value === value) {
      this.deleteAt(0)
      return true
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next
    }

    if (!current.next) return false

    if (current.next === this.tail) {
      this.tail = current
    }

    current.next = current.next.next
    this.length--
    return true
  }

  find(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) return index
      current = current.next
      index++
    }
    return -1
  }

  reverse() {
    let prev = null
    let current = this.head
    this.tail = this.head

    while (current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev
    return this
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }

  print() {
    console.log(this.toArray().join(' -> '))
  }
}

// Example usage
const list = new LinkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.insertAt(2, 15)

list.print() // 5 -> 10 -> 15 -> 20
console.log('Index of 15:', list.find(15)) // 2
console.log('Deleted at index 1:', list.deleteAt(1)) // 10
list.deleteByValue(20)
list.reverse()
list.print() // 15 -> 5
console.log('Size:', list.size()) // 2

module.exports = { Node, LinkedList }
