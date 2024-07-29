import apiService from "../utils/apiService";

 export const getWalletBalance=()=>apiService.get(`/api/v1/seller-web/show_Wallet`);

 export const getWalletTransactionDetails=()=>apiService.get(`/api/v1/seller-web/transactions`)