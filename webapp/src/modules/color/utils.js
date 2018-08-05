export const normalizeColor = color => color.replace(';', '')

export const isInvalidColor = color => color.indexOf('gradient') !== -1
