import { API_LINK } from "@/lib";
import axios from "axios";

export const fetchAllUsers = async (token: StoredValue) => {
  const BEARER_TOKEN = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${API_LINK}users/getallusers`,
    BEARER_TOKEN,
  );
  return response;
};