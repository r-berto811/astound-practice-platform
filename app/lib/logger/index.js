// lib/logger/index.js

// Load dependencies.
const path = require('path')
const moment = require('moment')
const SimpleLogger = require('simple-node-logger')

// create new logger instance.
const manager = new SimpleLogger({
  errorEventName: 'error'
})

// Create adapter according to node environment.
if (process.env.APP_LOGGING_ADAPTER === 'file') {
  manager.createFileAppender({
    logFilePath: path.resolve('logs', `${moment().format('YYYY-MM-DD')}.log`)
  })
} else {
  manager.createConsoleAppender()
}

// Create logger.
const log = manager.createLogger()

// Export logging function.
module.exports = log
