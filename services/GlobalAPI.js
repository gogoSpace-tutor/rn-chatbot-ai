import axios from "axios";

const BASE_URL = 'http://172.16.4.50:3000/api/bardapi';

const getBardApi = (userMsg) => axios.get(BASE_URL+'?ques'+userMsg);

export default {getBardApi};