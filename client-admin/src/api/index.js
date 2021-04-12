import axios from 'axios'

const industriesUrl = '/api/industries';
const technologiesUrl = '/api/technologies';
const messagesUrl = '/api/messages';

export const fetchIndustries = () => axios.get(industriesUrl);
export const addIndustry = (newIndustry) => axios.post(industriesUrl, newIndustry);
export const updateIndustry = (id, updatedIndustry) => axios.patch(`${industriesUrl}/${id}`, updatedIndustry);
export const deleteIndustry = (id) => axios.delete(`${industriesUrl}/${id}`);

export const fetchCategories = () => axios.get(`${technologiesUrl}/categories`);
export const addCategory = (newCategory) => axios.post(`${technologiesUrl}/categories`, newCategory);
export const updateCategory = (id, updatedCategory) => axios.patch(`${technologiesUrl}/categories/${id}`, updatedCategory);
export const deleteCategory = (id) => axios.delete(`${technologiesUrl}/categories/${id}`);

export const fetchMessages = () => axios.get(messagesUrl).then(res => res.json());