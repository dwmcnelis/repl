import { logger, inspect } from '@repl/logger'

// Reducing iterables through function
//
export const reduce = (): void => {
  const array1: Record<string, any>[] = [
    { name: 'Sue', age: 21, gender: 'female' },
    { name: 'Bob', age: 24, gender: 'male' },
    { name: 'Amy', age: 27, gender: 'female' },
    { name: 'Carl', age: 29, gender: 'male' }
  ]
  // First param is function (it should always return reduced so far), second is initial
  // Reduced here is a newly built object
  const over25 = array1.reduce((reduced: Record<string, any>, value: Record<string, any>): Record<string, any> => {
    if (value?.age > 25) {
      reduced[value?.name] = { age: value?.age, gender: value?.gender }
    }

    return reduced
  }, {})

  // First param is function (it should always return reduced so far), second is initial
  // Reduced here is a newly built object
  const males = array1.reduce((reduced: Record<string, any>, value: Record<string, any>): Record<string, any> => {
    if (value?.gender === 'male') {
      reduced[value?.name] = { age: value?.age, gender: value?.gender }
    }

    return reduced
  }, {})

  // First param is function (it should always return reduced so far), second is initial
  // Reduced here is a newly built object
  const females = array1.reduce((reduced: Record<string, any>, value: Record<string, any>): Record<string, any> => {
    if (value?.gender === 'female') {
      reduced[value?.name] = { age: value?.age, gender: value?.gender }
    }

    return reduced
  }, {})

  logger.debug(`map: ${inspect('array1', array1)}`)
  logger.debug(`map: ${inspect('over25', over25)}`)
  logger.debug(`map: ${inspect('males', males)}`)
  logger.debug(`map: ${inspect('females', females)}`)
}
