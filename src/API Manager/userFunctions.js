import axios from "axios";
import { url } from "./url";

export async function loginUser(data) {
    try {
      console.log("data inside loginuser:",data);
      const res= await axios.post(`${url}/login`, data);
      console.log("res user login:",res);
      return res;
    } catch (error) {
      console.log("error:", error);
    } 
  }

export async function saveUser(data) {
    try {
      return await axios.post(`${url}/add-agent`, data);
    } catch (error) {
      console.log("error:", error);
    } 
  }