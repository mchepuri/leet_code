const LRU = capacity => {
  const cache = new Map()
  let lruKey = null

  const put = (key, value) => {
    if (cache.size >= capacity) {
      console.log('Evicting key ', lruKey)
      cache.delete(lruKey)
    }
    cache.set(key, value)
    lruKey = key
  }
  const get = key => {
    if (!cache.has(key)) {
      return -1
    }
    return cache.get(key)
  }
  return { put, get }
}

const lru = LRU(2)
//console.log(lru.cache)
lru.put(1, 1)
lru.put(2, 2)
console.log(' Get 1 ', lru.get(1))
lru.put(3, 3)
console.log(' Get 2 ', lru.get(2))
lru.put(4, 4)
console.log(' Get 3 ', lru.get(3))
console.log(' Get 4 ', lru.get(4))
