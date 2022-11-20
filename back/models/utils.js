export class Enum {
  constructor (...keys) {
    keys.forEach((key, i) => {
      this[key] = i
    })
    Object.freeze(this)
  }

  * [Symbol.iterator] () {
    for (const key of Object.keys(this)) yield key
  }
}
