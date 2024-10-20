
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-intersection-observer-hook.cjs.production.min.js')
} else {
  module.exports = require('./react-intersection-observer-hook.cjs.development.js')
}
