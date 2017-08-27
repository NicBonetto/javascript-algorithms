function Node(val) {
  this.value = val
  this.left = null
  this.right = null
}

function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.push = function(val) {
  const root = this.root

  if (!root) {
    this.root = new Node(val)
    return
  }

  let currentNode = root
  const newNode = new Node(val)

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) currentNode.left = newNode
      else currentNode = currentNode.left
    }
    else {
      if (!currentNode.right) currentNode.right = newNode
      else currentNode = currentNode.right
    }
  }
}
