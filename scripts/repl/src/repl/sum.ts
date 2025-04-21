import { logger, inspect } from '@repl/logger'

// Simple evaluation of expressions
//
export const sum = (): void => {
  const a = 3
  const b = 5

  const sum = a + b

  logger.debug(`sum: ${inspect('a', a)}`)
  logger.debug(`sum: ${inspect('b', b)}`)
  logger.debug(`sum: ${inspect('sum', sum)}`)
}
