import { wretch } from 'wretch'


export const apiRequest = wretch()
  // Set the base url
  .url("http://external.api")
  // Authorization header
  // .auth(`Bearer ${ token }`)
  // Cors fetch options
  // .options({ credentials: "include", mode: "cors" })
  // Handle 403 errors
  // .resolve(_ => _.forbidden(handle403))
