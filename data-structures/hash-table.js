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

HashTable.prototype.insert = function(key, value) {
  const hash = this.computeHash(key)

  if(!this.values.hasOwnProperty(hash)) this.values[hash] = {}
  if(!this.values[hash].hasOwnProperty(key)) {
    this.values[hash][key] = value
    this.numberOfValues++
  }
}

HashTable.prototype.remove = function(key) {
  const hash = this.computeHash(key)

  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key]
    this.numberOfValues--
  }
}
