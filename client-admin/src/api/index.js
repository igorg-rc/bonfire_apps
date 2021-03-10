import axios from 'axios'

const industriesUrl = 'http://localhost:9000/api/industries'

export const fetchIndusdtries = () => axios.get(industriesUrl);
export const addIndustry = (newIndustry) => axios.post(industriesUrl, newIndustry);
export const updateIndustry = (id, updatedIndustry) => axios.patch(`${industriesUrl}/${id}`, updatedIndustry);
export const deleteIndustry = (id) => axios.delete(`${industriesUrl}/${id}`);