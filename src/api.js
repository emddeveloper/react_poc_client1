import axios from "axios"

export default axios.create({
  baseURL: `https://nxv-user-management-app.herokuapp.com/manageuserapp/v1.0/api/`
})
