export const getState = state => state['colors']
export const getData = state => getState(state).data
export const getColors = state => getData(state).colors
export const getRainbowColors = state => getData(state).colors.slice(0, 6)
