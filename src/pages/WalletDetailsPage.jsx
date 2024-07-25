import React, { useEffect, useState } from "react";
import NavBar from "../layouts/NavBar";
import Sidebar from "../layouts/SideBar";
import apiService from "../utils/apiService";
import WalletCard from "../components/walletCom/WalletCard";
import { message, Select } from "antd";
import StatBarChart from "../components/walletCom/StatBarChart";
import StatePieChart from "../components/walletCom/StatePieChart";
import WalletTransactionTable from "../components/walletCom/WalletTransactionTable";
import WalletPageLoading, {
  WalletBalanceLoading,
} from "../ShimmerLoading/WalletPageLoading";
const WalletDetailsPage = () => {
  const [allWallets, setAllWallets] = useState([]);
  const [walletDetails, setWalletDeatils] = useState([]);
  const [filterWallet, setFilterWallet] = useState([]);
  const [currencyName, setCurrencyName] = useState("USD");
  const [walletBalanceLoading, setWalletBalanceLoading] = useState(false);
  const [walletDetailsLoading, setWalletDetailsLoading] = useState(false);

  



  useEffect(() => {
    // all wallet balance  deatils
    const allWalletPages = async () => {
      try {
        setWalletBalanceLoading(true);
        const { data, status } = await apiService.get(
          `/api/v1/seller-web/show_Wallet`
        );

        const sunny = await apiService.get(
          `/api/v1/seller-web/show_Wallet`
        );
        console.log(sunny)
        if (status === 200) {
          setAllWallets(data?.wallet);
          setWalletBalanceLoading(false);
        }
      } catch (error) {
        setWalletBalanceLoading(false);
        message.error("something went wrong");
      }
    };
    // wallet page details
    const getWalletAllDeatils = async () => {
      try {
        setWalletDetailsLoading(true);
        const { data, status } = await apiService.get(
          `/api/v1/seller-web/transactions`
        );
        if (status === 200) {
          setWalletDeatils(data?.data);
          setWalletDetailsLoading(false);
        }
      } catch (error) {
        setWalletDetailsLoading(false);
      }
    };

    allWalletPages();
    getWalletAllDeatils();
  }, []);

  // all currency symbols
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
  useEffect(() => {
    const walletFilter = () => {
      const filterWalletDetails = walletDetails.filter(
        (wallet) => wallet.title === currencyName
      );
      setFilterWallet(filterWalletDetails);
    };
    walletFilter();
  }, [currencyName, walletDetails]);

  return (
    <section className="flex  bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-4 py-2">
          {walletBalanceLoading !== true ? (
            <div className="py-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-zinc-800 font-semibold">
                  Wallet Summary
                </h2>
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
          ) : (
            <WalletBalanceLoading />
          )}

          {walletDetailsLoading !== true ? (
            <>
              <div className="flex items-center justify-between py-4">
                <h2 className="text-xl text-zinc-800 font-semibold">
                  Wallet Overview
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

              <div className="flex items-center gap-2 ">
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
                  />x
                </div>
              </div>
            </>
          ) : (
            <WalletPageLoading />
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletDetailsPage;
