import axios from 'axios';

export default axios.create({
  baseURL: `http://172.16.188.112:8080/v2/`
});