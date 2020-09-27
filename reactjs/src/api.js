import axios from "axios"

const apiEndpoint = process.env.REACT_APP_AXIOS_URL

export default axios.create({
  // baseURL: `http://localhost:8000`,
  baseURL: apiEndpoint,
})
