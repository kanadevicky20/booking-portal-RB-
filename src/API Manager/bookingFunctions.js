import axios from "axios";
import { url } from "./url";

export async function getAdSlotBooking(token) {
      try {
          console.log("inside getadslot api",token);
        const response = await axios.get(`${url}/ad-slot-bookings`,{ headers: { authorization: token } });
        
          return response.data;
       
      }
      catch (error) {
        console.log("error:", error);
      }
    }

export async function blockAdSlot(bookinId) {
        try {
          return await axios.post(`${url}/block-slot`, bookinId);
        } catch (error) {
          console.log("error:", error);
        } 
      }

export async function uploadImage(data) {
        try {
          return await axios.post(`${url}/upload-image`, data);
        } catch (error) {
          console.log("error:", error);
        } 
      }
export async function fetchImage(id,token) {
        try {
          return await axios.get(`${url}/fetch-image/${id}`, { params: { authorization: token } })
        } catch (error) {
          console.log("error:", error);
        } 
      }    

      