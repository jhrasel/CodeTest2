// Import Axios at the top of your file
import axios from "axios";

// Define an async function to fetch the data
export async function fetchProducts() {
  try {
    // Use Axios to make a GET request to the API
    const response = await axios.get("https://fakestoreapi.com/products");

    // Check if the request was successful
    if (response.status === 200) {
      return response.data; // Return the data from the API
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw error; // Handle any errors
  }
}
