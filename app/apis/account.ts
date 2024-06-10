import { API_LINK } from '@/lib';
import axios from 'axios';

export const registerUser = async (body: UserForm) => {
    const response = await axios.post(`${API_LINK}users/register`, body)
    return response
}