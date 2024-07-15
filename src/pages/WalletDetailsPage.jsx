import React, { useEffect, useState } from "react";
import NavBar from "../layouts/NavBar";
import Sidebar from "../layouts/SideBar";
import apiService from "../utils/apiService";
import WalletCard from "../components/walletCom/WalletCard";
import { message } from "antd";
const WalletDetailsPage = () => {
  const [allWallets, setAllWallets] = useState([]);
  useEffect(() => {
    const allWalletPages = async () => {
      try {
        const { data, status } = await apiService.get(
          `/api/v1/seller-web/show_Wallet`
        );
        if (status === 200) {
          setAllWallets(data?.wallet)
        }
      } catch (error) {
        message.error("something went wrong")
      }
    };

    allWalletPages()
  }, []);
  return (
    <section className="flex gap-6 bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-4 py-2">
        <div>
          <h2 className="text-xl text-zinc-800 font-semibold">Wallet Summary</h2>
          <div className="mt-2 
          grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2">
            {
              allWallets?.map((wallet)=>{
                return(
                  <WalletCard
                    key={wallet?.id}
                    currencyName={wallet?.currency_name}
                    balance={wallet?.balance}
                  />
                
                )
              })
            }
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WalletDetailsPage;
