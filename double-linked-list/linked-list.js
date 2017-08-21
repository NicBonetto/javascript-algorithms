function Node(val) {
  this.data = val
  this.previous = null
  this.next = null
}

function linkedList() {
  this.size = 0
  this.head = null
  this.tail = null
}

linkedList.prototype.add = function(value) {
  const newNode = new Node(value)

  if (this.size) {
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
  }
  else {
    this.head = newNode
    this.tail = newNode
  }

  this.size++

  return newNode
}

linkedList.prototype.remove = function(position) {
  const message = {
    error: 'Error: non-existent node in list.',
    success: 'Successfully deleted node at position: ' + position + '.'
  }
  let currentNode = this.head
  let count = 1
  let nodePreviousDelete = null
  let nodeNextDelete = null
  let nodeToDelete = null

  if (this.size === 0 || position < 1 || position > this.size) throw new Error(message.error)

  if (position === 1) {
    this.head = currentNode.next
    if (!this.head) this.head.previous = null
    else this.tail = null
  }
  else if (position === this.size) {
    this.tail = this.tail.previous
    this.tail.next = null
  }
  else {
    while (count < position) {
      currentNode = currentNode.next
      count++
    }
    nodePreviousDelete = currentNode.previous
    nodeNextDelete = currentNode.next
    nodeToDelete = currentNode

    nodePreviousDelete.next = nodeNextDelete
    nodeNextDelete.previous = nodePreviousDelete
    nodeToDelete = null
  }

  this.size--
  return message.success
}
