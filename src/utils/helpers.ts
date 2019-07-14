
export function isGuid (value) {
  const guidRegex: RegExp = new RegExp(/^[{(]?[0-9a-f]{8}[-]?([0-9a-f]{4}[-]?){3}[0-9a-f]{12}[)}]?$/g)
  return guidRegex.test(value)
}
// Picks only needed properties from object
export function pick<T, K extends keyof T> (obj: T, ...keys: K[]): Pick<T, K> {
  const copy = {} as Pick<T, K>
  keys.forEach((key) => { copy[key] = obj[key] })
  return copy
}

// Checks value is numeric or not
export function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// Check object is plain javascript object
export function isPlainObject (obj: any): Boolean {
  return obj === Object(obj)
}

// Checks if object is empty or not
export function isEmptyObject (obj: object): Boolean {
  return isPlainObject(obj) && Object.getOwnPropertyNames(obj).length === 0
}

//
export function removeDuplicates (originalArray: Array<any>, objKey: string): Array<any> {
  const trimmedArray: Array<any> = []
  const values: Array<any> = []
  let value

  for (let i = 0; i < originalArray.length; i++) {
    value = originalArray[i][objKey]

    if (values.indexOf(value) === -1) {
      trimmedArray.push(originalArray[i])
      values.push(value)
    }
  }

  return trimmedArray
}

//
export function trimArray (arr: Array<any>, key: string): Array<any> {
  const values: object = {}
  return arr.filter(function (item: any) {
    const val: any = item[key]
    const exists: Boolean = !!values[val]
    values[val] = true
    return !exists
  })
}
