import pino from 'pino'
import { inspect as inspector } from 'util'

export const inspect = (label: string, obj: unknown): string => {
  return `${label}: ${obj !== undefined ? inspector(obj, { showHidden: false, depth: null, colors: true }) : ''}`
}

export const stringify = (obj: unknown) => JSON.stringify(obj)

export const logger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})
