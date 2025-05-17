import axios from "axios";

const api = axios.create({
    baseURL: 'https://test.api.bbk.kg/admin',
})

api.interceptors.request.use((config) => {

    const tokenString = localStorage.getItem('token')
    const token = tokenString ? JSON.parse(tokenString) : null

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
},

    (error) => {
        return Promise.reject(error)
    }
)

export default api;