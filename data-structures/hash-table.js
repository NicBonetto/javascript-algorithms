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

HashTable.prototype.search = function(key) {
  const message = {
    'error': 'Sorry, that key was not found in this table.',
    'found': 'Found ' + key + ' in the table.'
  }
  const hash = this.computeHash(key)

  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) return message['found']
  else return message['error']
}
