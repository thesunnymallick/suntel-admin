import React, { useEffect, useState } from "react";
import NavBar from "../layouts/NavBar";
import Sidebar from "../layouts/SideBar";
import apiService from "../utils/apiService";
import WalletCard from "../components/walletCom/WalletCard";
import { message, Select } from "antd";
import StatBarChart from "../components/walletCom/StatBarChart";
import StatePieChart from "../components/walletCom/StatePieChart";
import WalletTransactionTable from "../components/walletCom/WalletTransactionTable";
const WalletDetailsPage = () => {
  const [allWallets, setAllWallets] = useState([]);
  const [walletDetails, setWalletDeatils] = useState([]);
  const [filterWallet, setFilterWallet]=useState([]);
  const [currencyName, setCurrencyName]=useState("USD");

  useEffect(() => {
    const allWalletPages = async () => {
      try {
        const { data, status } = await apiService.get(
          `/api/v1/seller-web/show_Wallet`
        );
        if (status === 200) {
          setAllWallets(data?.wallet);
        }
      } catch (error) {
        message.error("something went wrong");
      }
    };

    const getWalletAllDeatils = async () => {
      try {
        const { data, status } = await apiService.get(
          `/api/v1/seller-web/transactions`
        );
        if (status === 200) {
          setWalletDeatils(data?.data);
        }
      } catch (error) {}
    };

    allWalletPages();
    getWalletAllDeatils();
  }, []);

  const currencySymbols = [
    {
      currencyName: "USD",
      currencyIcon: "$",
    },
    {
      currencyName: "EUR",
      currencyIcon: "€",
    },
    // {
    //   currencyName: "CNY",
    //   currencyIcon: "'¥",
    // },
    // {
    //   currencyName: "INR",
    //   currencyIcon: "₹",
    // },
  ];


 // filter currency wish
   useEffect(()=>{
    const walletFilter=()=>{
      const filterWalletDetails = walletDetails.filter(
        (wallet) => wallet.title === currencyName
      );
  
      setFilterWallet(filterWalletDetails)
    }
    walletFilter()
   }, [currencyName, walletDetails])
 
  return (
    <section className="flex  bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-4 py-2">
          <div className="py-2">
            
            <div className="flex items-center justify-between">
            <h2 className="text-xl text-zinc-800 font-semibold">
              Wallet Summary
            </h2>
             <Select
                  value={currencyName}
                  onChange={(value) => setCurrencyName(value)}
                >
                  {currencySymbols.map((currency) => (
                    <Select.Option
                      key={currency.currencyName}
                      value={currency.currencyName}
                    >
                      {`${currency.currencyName} (${currency.currencyIcon})`}
                    </Select.Option>
                  ))}
             </Select>
            </div>
            <div
              className="mt-2 
              grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2"
            >
              {allWallets?.map((wallet) => {
                return (
                  <WalletCard
                    key={wallet?.id}
                    currencyName={wallet?.currency_name}
                    balance={wallet?.balance}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-[50%] h-[30rem] p-4 bg-white shadow-sm rounded-md">
              <div className="flex justify-between pb-3">
                <h2 className="text-zinc-800 font-semibold text-sm">
                  Spending Over 12 Months (Bar Chart)
                </h2>  
              </div>
              <div className="flex justify-center items-start w-full h-[90%]">
                <StatBarChart stat={filterWallet[0]?.stat} />
              </div>
            </div>
            <div className="w-[50%] h-[30rem]  p-4 bg-white shadow-sm rounded-md ">
              <div className="flex justify-between pb-3">
                <h2 className="text-zinc-800 font-semibold text-sm">
                  Spending Over 12 Months (Pie Chart)
                </h2>
              </div>
              <div className="flex justify-center items-center w-full h-[90%]">
                <StatePieChart stat={filterWallet[0]?.stat} />
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className="bg-white rounded-md shadow-sm p-4">
              <div className="flex justify-between pb-3">
                <h2 className="text-zinc-800 font-semibold text-sm">
                  All Transaction
                </h2>
              </div>
              <WalletTransactionTable
                transactions={filterWallet[0]?.transactions}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletDetailsPage;
