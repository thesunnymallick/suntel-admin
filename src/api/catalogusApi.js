import apiService from "../utils/apiService";
import { ApiError } from "./apiError";
import { AxiosError } from 'axios';

const CATALOG_KEY = 'catalogData'; 
const TIMEOUT = 5000; 

// Utility function to create a timeout promise
const timeoutPromise = (ms, errorMsg) =>
    new Promise((_, reject) =>
      setTimeout(() => reject(new ApiError(errorMsg)), ms)
);

// fetch products 
const fetchData = async (url) => {
    try {
      const response = await Promise.race([
        apiService.get(url).then(response => response.data),
        timeoutPromise(TIMEOUT, 'Server is not responding, try again later!')
      ]);
      return response;

    } catch (error) {

      if (error instanceof ApiError) {
        console.error('API Error:', error.message);
        throw error;
      } 
      else if (error instanceof AxiosError) {
        // Handle Axios specific error
        const message = error.response?.data?.error || error.response?.data?.message || error.response?.statusText || 'An unexpected error occurred';
        console.error('Axios Error:', message, error.toJSON());
        throw new ApiError(message, error.response?.data);
      }
       else if (error instanceof Error) {
        console.error('Generic Error:', error.message);
        throw new ApiError(error.message, undefined);
      } 
      else {
        console.error('Unknown Error:', error);
        throw new ApiError('An unknown error occurred', undefined);
      }
    }
};


// fetch e-tag
const fetchETag = async (url) => {
    try {
      const response = await apiService.head(url);
      console.log('Headers:', response.headers); // Log all headers to debug
  
      // Check if ETag header exists with different casing
      const etag = response.headers['Suntel-Etag'] || response.headers['suntel-etag'];
      console.log('ETag from server:', etag);
  
      return etag || null;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Axios Error:', error.message, error.toJSON());
      } else if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('Unknown Error:', error);
      }
      return null;
    }
  };
  
  
// get catalogues
  export const getCatalogus = async (filter,notifyUpdate) => {
    const url = filter ? `/product/listings?filter=${filter}` : '/product/listings';
    const cachedData = localStorage.getItem(CATALOG_KEY);
  
    if (cachedData) {
      const cached = JSON.parse(cachedData);
      console.log('Cached ETag:', cached.etag); 
      // Debugging: Log the cached ETag
  
      // Fetch ETag and data in the background
      setTimeout(async () => {
        try {
            
          const etagServer = await fetchETag(url);
           // Debugging: Log the server ETag
          console.log('Server ETag:', etagServer);
  
          if (!etagServer || etagServer !== cached.etag) {
            const data = await fetchData(url);
            const etagNew = await fetchETag(url);
            localStorage.setItem(
              CATALOG_KEY,
              JSON.stringify({ etag: etagNew, data })
            );
            notifyUpdate(true);
          }
        } catch (error) {
          console.error('Error during update check:', error);
        }
      }, 0); // Execute as soon as possible in the event loop
  
      // Return cached data immediately
      return cached.data;
    }
  
    // Fetch and cache data if not previously cached
    try {
      const data = await fetchData(url);
      const etagNew = await fetchETag(url);
      localStorage.setItem(
        CATALOG_KEY,
        JSON.stringify({ etag: etagNew, data })
      );// Debugging: Log new ETag set after fetching data
      console.log('New ETag:', etagNew); 
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };