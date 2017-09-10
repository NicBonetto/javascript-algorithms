function HashTable(size) {
  this.values = {}
  this.numberOfValues = 0
  this.maxSize = size
}

HashTable.prototype.length = function() {
  return this.numberOfValues
}

HashTable.prototype.computeHash = function(key) {
  return key.toString().length % this.maxSize
}
