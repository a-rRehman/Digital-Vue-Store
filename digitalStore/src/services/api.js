import axios from "axios";
const BASE_URL = "https://dummyjson.com";
const ApiServices = {
  //Getting products function Api
  async gettingProducts() {
    const response = await axios.get(`${BASE_URL}/products`);
    const data = await response.data;
    console.log(data);
    return data;
  },
};
export default ApiServices;
