import { apiRequest } from '../../utils/api/api-request'


export const index = (userId) => {
  apiRequest
    .url(`/users/${userId}`)
    .get()
    .json(json => {
      // return json
      debugger;
    })
}
