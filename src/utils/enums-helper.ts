// import enums from 'src/assets/seeds/enums'
const enums = require('src/assets/seeds/enums')
const notFound: string = 'unknown'

export function getShotTypeName (value: number): string {
  if (!Number.isInteger(value)) return notFound
  const type = enums.shotTypes.find(x => x.id === value)
  return type ? type.text : notFound
}

export function getShotTypeAbbr (value: number): string {
  if (!Number.isInteger(value)) return notFound
  const type = enums.shotTypes.find(x => x.id === value)
  return type ? type.text : notFound
}

export function getShotDistanceName (value: number): string {
  if (!Number.isInteger(value)) return notFound
  const distance = enums.throwDistances.find(x => x.id === value)
  return distance ? distance.text : notFound
}
