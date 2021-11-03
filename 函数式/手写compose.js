/*
 * compose
 *
*/

function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
var greet = function (name) {
  return 'hi:' + name
}
var exclaim = function (statement) {
  return statement.toUpperCase() + '!'
}z