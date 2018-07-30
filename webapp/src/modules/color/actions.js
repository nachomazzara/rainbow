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
