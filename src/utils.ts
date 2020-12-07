import { name as appName } from "../package.json"

// eslint-disable-next-line import/prefer-default-export
export const createActionName = (
  reducerName: string,
  actionName: string
): string => {
  return `app/${appName}/${reducerName}/${actionName}`
}
