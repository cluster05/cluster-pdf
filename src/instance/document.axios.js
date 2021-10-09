import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

export const documentInstance =  axios.create({
    baseURL : `${BACKEND_BASE_URL}/document`
})