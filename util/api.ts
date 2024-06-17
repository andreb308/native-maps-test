import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gemini-api-test.vercel.app'
})

export default api;