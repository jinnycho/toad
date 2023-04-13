// This file lets us `set` and `get` non-lexical stack-based variables.

let contextVars = {}

function pushContextVar(name, value) {
  if (!(name in contextVars)) {
    contextVars[name] = []
  }
  contextVars[name].push(value)
}

function popContextVar(name) {
  contextVars[name].pop()
}

function setWithin(name, value, callback) {
  pushContextVar(name, value);
  callback();
  popContextVar(name);
}

function get(name) {
  return contextVars[name]?.at(-1)
}

const initialize = pushContextVar

export { setWithin, get, initialize }
