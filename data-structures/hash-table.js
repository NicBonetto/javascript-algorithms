function HashTable() {
  this.values = {}
  this.numberOfValues = 0
}

HashTable.prototype.length = function() {
  return this.numberOfValues
}
