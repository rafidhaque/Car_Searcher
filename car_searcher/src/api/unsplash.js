import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FjS72IVU8WGKh5H05V4ygXHKCRxsKXLRsQJDV2cW6ho",
  },
});
