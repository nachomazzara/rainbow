export const getState = state => state['wallet']
export const getData = state => getState(state).data
export const getContracts = state => getData(state).eth.contracts
export const getAddress = state => getData(state).address
