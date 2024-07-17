import React, { useState } from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import { Avatar, Input, Table } from "antd";
import netflixImge from "../assets/netflixBg.jpg";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { ImCopy } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Scrollbars } from "rc-scrollbars";
const GiftCardSteam = () => {
  const { id } = useParams();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dataSource = [
    {
      key: "1",
      region: "US",
      inStock: 10,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },

    {
      key: "2",
      region: "UK",
      inStock: 0,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },

    {
      key: "3",
      region: "UK",
      inStock: 10,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },
    {
      key: "4",
      region: "EU",
      inStock: 10,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },
    {
      key: "5",
      region: "CA",
      inStock: 0,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },

    {
      key: "6",
      region: "CA",
      inStock: 5,
      price: "$100.00",
      quantity: "",
      totalPrice: "$100.OO",
    },
  ];

  const columns = [
    {
      title: "Product",
      width: 250,
      // fixed:"left",
      render: () => {
        return (
          <div className="flex items-center gap-2">
            <Avatar src={<img src={netflixImge} alt="avatar" />} />
            <span className="text-xs">{id}</span>
          </div>
        );
      },
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      width: 100,
      filters: [
        { text: "US", value: "US" },
        { text: "UK", value: "UK" },
        { text: "EU", value: "EU" },
        { text: "CA", value: "CA" },
      ],
      onFilter: (value, record) => record.region.includes(value),
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      width: 100,
      filters: [
        { text: "In Stock", value: "in" },
        { text: "Out of Stock", value: "out" },
      ],
      onFilter: (value, record) =>
        value === "in" ? record.inStock > 0 : record.inStock === 0,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
      render: () => {
        return <Input size="large" value={1} style={{ width: "100%" }} />;
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      width: 100,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      width: 150,
      render: () => {
        return (
          <button
            className="w-[98%] h-10 bg-blue-500 rounded-md 
            shadow-sm text-white flex justify-center items-center gap-2"
          >
            <span>
              <BsCart3 />
            </span>
            <span>Add To Cart</span>
          </button>
        );
      },
    },
  ];

  const NAME = "STEAM";
  const PARA = "Download and play thousand of your favorite game";
  const IMG = netflixImge;

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <section className="flex bg-zinc-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-6 overflow-hidden py-4">
          <div className="pt-6">
            <h2 className="text-zinc-800 font-medium text-xl">{id}</h2>

            <div className=" flex flex-col lg:flex-row  gap-2 pt-10">
              <div className="w-[100%] lg:w-[20%]">
                <div
                  className="flex items-center gap-x-1
                  text-zinc-800 text-lg font-semibold pb-1"
                >
                  <MdOutlineOutlinedFlag />
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

                <div className="flex items-center justify-start gap-8 lg:justify-between pt-4">
                  <div className="flex flex-col text-zinc-700 text-sm">
                    <span className="">Product identifer: </span>
                    <spna className="font-bold">product1234</spna>
                  </div>
                  <div
                    className="w-9 h-9 shadow-sm border-[1px] border-zinc-400 
                   rounded-md flex
                   justify-center items-center cursor-pointer"
                  >
                    <ImCopy className="2xl" />
                  </div>
                </div>
              </div>

              <div
                className="w-[350px] 
                lg:w-[80%] pt-4 overflow-x-auto  bg-white shadow-sm rounded-md"
              >
                <div className="px-4 py-2">
                  <div className="flex justify-between gap-2 items-center pb-2 px-2">
                    <h2 className="text-zinc-700 font-semibold text-base">
                      All Products
                    </h2>
                    <div className="flex items-center justify-end gap-2 w-[50%]">
                      {
                        <span className="text-zinc-700 font-semibold text-sm">
                          {selectedRowKeys.length > 0
                            ? `Selected ${selectedRowKeys.length} items`
                            : null}
                        </span>
                      }

                      {selectedRowKeys.length !== 0 && (
                        <button
                          className="w-[30%] h-10 border-[1px] border-blue-500 bg-blue-50  rounded-md 
                    shadow-sm text-blue-500 flex justify-center items-center gap-2"
                        >
                          <span>
                            <BsCart3 />
                          </span>
                          <span>Add To Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <Scrollbars style={{ height: "50vh" }} autoHide>
                  <Table
                      rowSelection={rowSelection}
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                      //  className="deep-gray-header"
                      // scroll={{ y: 400 }}
                    />
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSteam;
