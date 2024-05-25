import { default as a } from "axios"
import { PUBLIC_API_URL } from "$env/static/public";

const axios = a.create({
  baseURL: PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default axios;
