import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://dmitrii-tsyganov-js17-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;