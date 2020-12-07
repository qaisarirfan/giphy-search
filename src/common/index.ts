export const actionIds = {
  GET_NUMBER_REQUEST_START: "GET_NUMBER_REQUEST_START",
  GET_NUMBER_REQUEST_COMPLETED: "GET_NUMBER_REQUEST_COMPLETED",
}

export interface BaseAction {
  type: string
  payload?: any
}
