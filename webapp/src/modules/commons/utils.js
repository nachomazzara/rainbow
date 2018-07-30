export function action(type, payload) {
  return {
    type,
    payload
  }
}

export function normalizeTypes(type) {
  return {
    request: `[Request] ${type}`,
    success: `[Success] ${type}`,
    failure: `[failure] ${type}`
  }
}
