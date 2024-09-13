import axios from "axios";

export const api = axios.create({
  baseURL: 'https://66e478bfd2405277ed146ad2.mockapi.io/api/v1',
})