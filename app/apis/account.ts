import { API_LINK } from "@/lib";
import axios from "axios";

export const registerUser = async (body: UserForm) => {
  const response = await axios.post(`${API_LINK}users/register`, body);
  return response;
};

export const loginUser = async (body: LoginForm) => {
  const response = await axios.post(`${API_LINK}users/login`, body);
  return response;
};

export const createUser = async (userId: string) => {
    const response = await axios.put(`${API_LINK}account/createaccount`, userId)
    return response;
}