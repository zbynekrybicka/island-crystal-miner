import ajax from 'axios'

export const baseURL = "http://localhost:8080"

export const axios = ajax.create({
    withCredentials: true,
    baseURL
})