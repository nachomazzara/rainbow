import { normalizeTypes, action } from '../commons/utils'

export const FETCH_COLORS = normalizeTypes('fetch colors')

export function fetchColorsRequest() {
  return action(FETCH_COLORS.request)
}

export function fetchColorsSuccess(colors) {
  return action(FETCH_COLORS.success, { colors })
}

export function fetchColorsFailure(error) {
  return action(FETCH_COLORS.failure, { error })
}

export const CREATE_COLOR = normalizeTypes('create colors')

export function createColorRequest(color, metadata) {
  return action(CREATE_COLOR.request, { color, metadata })
}

export function createColorSuccess(txLink) {
  return action(CREATE_COLOR.success, { txLink })
}

export function createColorFailure(error) {
  return action(CREATE_COLOR.failure, { error })
}
