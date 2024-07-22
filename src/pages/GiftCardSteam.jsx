import React, { useState } from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import { Avatar, Input, InputNumber, Table } from "antd";
import netflixImge from "../assets/netflixBg.jpg";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { ImCopy } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Scrollbars } from "rc-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { addMultipleToCart, addToCart, updateQuantity } from "../feature/cartSlice";
import ReactCountryFlag from "react-country-flag";
const GiftCardSteam = () => {
  const { id } = useParams();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [rowProducts, setRowProducts]=useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const initialDataSource = [
    {
      key: "1",
      region: "US",
      inStock: 10,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
    {
      key: "2",
      region: "UK",
      inStock: 0,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
    {
      key: "3",
      region: "UK",
      inStock: 10,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
    {
      key: "4",
      region: "EU",
      inStock: 10,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
    {
      key: "5",
      region: "CA",
      inStock: 0,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
    {
      key: "6",
      region: "CA",
      inStock: 5,
      price: 100.00,
      quantity: 1,
      totalPrice: 100.00,
    },
  ];

  const [dataSource, setDataSource] = useState(initialDataSource);

  const handleQuantityChange = (value, recordKey) => {
    const newDataSource = dataSource.map((item) => {
      if (item.key === recordKey) {
        const newTotalPrice = (value * item.price).toFixed(2);
        return { ...item, quantity: value, totalPrice: newTotalPrice };
      }
      return item;
    });
    setDataSource(newDataSource);
  };


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
        {
          text: (
            <>
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />{" "}
              US
            </>
          ),
          value: "US",
        },
        {
          text: (
            <>
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />{" "}
              UK
            </>
          ),
          value: "UK",
        },
        {
          text: (
            <>
              <ReactCountryFlag
                countryCode="EU"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />{" "}
              EU
            </>
          ),
          value: "EU",
        },
        {
          text: (
            <>
              <ReactCountryFlag
                countryCode="CA"
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />{" "}
              CA
            </>
          ),
          value: "CA",
        },
      ],
      onFilter: (value, record) => record.region.includes(value),
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      width: 100,
      render :(text, record)=>{
         return(
          record.inStock===0 ? <span className="text-red-600 text-sm font-semibold">out of stock</span> : record.inStock
         )
      },
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
      key: "quantity",

      width: 100,
      render: (text, record) => {
        return (
          <InputNumber
            size="large"
            value={record.inStock === 0 ? 0 : record.quantity}
            min={1}
            disabled={record.inStock===0 ?  true : false}
            max={record.inStock}
            style={{ width: "100%" }}
            onChange={(value) => handleQuantityChange(value, record.key) }
          />
        );
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
      render: (text, record) => {
        const isInCart = cartItems.some((item) => item.key === record.key);
        return isInCart ? (
          <button
            onClick={() => console.log("Go to Cart")}
            className="w-[98%] h-10 bg-blue-700 rounded-md 
            shadow-sm text-white flex justify-center items-center gap-2"
          >
            <span>
              <BsCart3 />
            </span>
            <span>Go to Cart</span>
          </button>
        ) : (
          <button
            disabled={record.inStock===0 ?  true : false}
            onClick={() => dispatch(addToCart(record))}
            className={`
              w-[98%] h-10 bg-blue-700 rounded-md 
              shadow-sm text-white flex justify-center items-center gap-2
              ${record.inStock===0 && "opacity-70 cursor-not-allowed"}
              `}
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

  const onSelectChange = (newSelectedRowKeys, value) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys, value);
    setSelectedRowKeys(newSelectedRowKeys);
    setRowProducts(value)
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: record.inStock === 0 ||  cartItems.some((item) => item.key === record.key),
    }),
  };

  //  Add Multiple product 

  const addMultipleProducts=()=>{
     dispatch(addMultipleToCart(rowProducts))
  }

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
                         onClick={addMultipleProducts}
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
