import axios from "axios";
import { BACKEND_BASE_URL } from "../config";

export const analyticsInstance = axios.create({
  baseURL: `${BACKEND_BASE_URL}/analytics`,
});
