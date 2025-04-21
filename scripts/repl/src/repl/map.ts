import { logger, inspect } from '@repl/logger'

// Mapping iterables through function
//
export const map = (): void => {
  const array1: number[] = [23, 101, 3, 3003, 77]
  const over1000 = array1.map((value: number) => value > 1000)
  logger.debug(`map: ${inspect('array1', array1)}`)
  logger.debug(`map: ${inspect('over1000', over1000)}`)
}
