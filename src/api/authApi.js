import apiService from "../utils/apiService";


// Log in user call api
export const loginUser = (formData) => apiService.post('/api/v1/seller/login', formData);