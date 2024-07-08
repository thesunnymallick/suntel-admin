import React from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import { Input, Table } from "antd";
import netflixImge from "../assets/netflixBg.jpg"
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { ImCopy } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";

const GiftCardSteam = () => {
  const dataSource = [
    {
      key: "1",
      region: "US",
      inStock: 10,
      price: "$100.00",
      quantity:"",
      totalPrice:"$100.OO"
    },

  ];

  const columns = [
    {
      title: "Region",
      dataIndex: "region",
      key: "",
    },
    {
      title: "in Stock",
      dataIndex: "inStock",
      key: "",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        render:()=>{
          return  <Input
          size="large"
          value={1}
          style={{width:"30%", }}
        />
        }
    },
    {
        title: "Total Price",
        dataIndex: "totalPrice",
        key: "",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "",
      render:()=>{
        return (
          <button className="w-[80%] h-10 bg-blue-500 rounded-md shadow-sm text-white flex justify-center items-center gap-2">
            <span><BsCart3/></span>
            <spna>Add To Cart</spna>
          </button>
        )
      }
  },
  ];

  const NAME="STEAM";
  const PARA="Download and play thousand of your favorite game";
  const IMG=netflixImge

  return (
    <section className="flex gap-6 bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-6">
          <div className="pt-6">
            <h2 className="text-zinc-800 font-medium text-xl">Steam 5 USD</h2>

            <div className="flex gap-6 pt-10">
              <div className="flex-2">
              
                 <div className="flex items-center justify-center gap-x-1
                  text-zinc-800 text-lg font-semibold pb-1">
                  <MdOutlineOutlinedFlag/>
                  <span>Redeeemable in: us</span>
                 </div>

                <div className="w-48 h-64 rounded-md overflow-hidden relative">
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src={IMG}
                    alt={NAME}
                  />
                  <div
                    className="absolute inset-0 
                     bg-gradient-to-t from-blue-950  
                     via-transparent  to-slate-800 opacity-90 flex flex-col "
                  >
                    <h2 className="text-white text-3xl font-bold text-center tracking-[7px] mt-[50%] ">
                      {NAME}
                    </h2>
                    <p
                      className="text-gray-100 font-semibold text-xs text-center
                      mb-2 mt-[40%]"
                    >
                      {PARA}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-col text-zinc-700 text-sm">
                   
                    <span className="">Product identifer: </span>
                    <spna className="font-bold">product1234</spna>
                  </div>
                  <div className="w-9 h-9 shadow-sm border-[1px] border-zinc-400 
                   rounded-md flex
                   justify-center items-center cursor-pointer">
                  <ImCopy className="2xl"/>
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <Table dataSource={dataSource}  
                 columns={columns} pagination={false}  
                 className="deep-gray-header"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSteam;
