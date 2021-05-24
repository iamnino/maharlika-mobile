import axios from "axios";

export const header = axios.create({
    baseURL: `${process.env.API_URL}`,
    headers: { 'Authorization': `Bearer ${process.env.BEARER_TOKEN}` },
    timeout: 1000
});