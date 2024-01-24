import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    create: newContact => api.post(`/${resource}`, newContact),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const  userRegister = resourceApi('users/register');
const  userLogin = resourceApi('users/login');
const userLogOut = resourceApi('users/logout')

export { userRegister, userLogin, userLogOut };