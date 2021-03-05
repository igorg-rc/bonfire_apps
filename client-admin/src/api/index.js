import axios from 'axios'

const industriesUrl = 'http://localhost:9000/api/industries'

export const fetchIndusdtries = () => axios.get(industriesUrl);

export const addIndustry = (newIndustry) => axios.post(industriesUrl, newIndustry);