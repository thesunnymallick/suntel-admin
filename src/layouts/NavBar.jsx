import { Avatar, Input } from "antd";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import profile2 from "../assets/profile2.png";
import { useDispatch, useSelector } from "react-redux";
import { CiWallet } from "react-icons/ci";
import { CgMenuRightAlt } from "react-icons/cg";
import { closeSidebarMenu, openSidebarMenu } from "../feature/menuHandelSlice";
import { IoMdClose } from "react-icons/io";
import apiService from "../utils/apiService";
import {ShimmerButton} from "react-shimmer-effects";
import {useNavigate} from "react-router-dom"
const NavBar = () => {
  const [walletBalnce, setWalletBalnce] = useState([]);
  const [loading, setLoading] = useState(false);
  // get login info from redux
  const { authInfo } = useSelector((state) => state.login);
  const { sidebarMobileMenu } = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handelOpenSidebar = () => {
    dispatch(openSidebarMenu());
  };
  const handelCloseSidebar = () => {
    dispatch(closeSidebarMenu());
  };

  // fetch wallet balance
    useEffect(() => {
    const getWalletBalance = async () => {
      try {
        setLoading(true);
        const { status, data } = await apiService.get(
          `/api/v1/seller-web/show_Wallet`
        );
        if (status === 200) {
          setWalletBalnce(data?.wallet);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getWalletBalance();
    }, []);

  const filterWallet = walletBalnce?.find(
    (wallet) => wallet.currency_name === "EUR"
  );

  

  return (
    <div
       className="py-4 w-full  flex items-center
       justify-between fixed lg:sticky top-0 z-40  px-6 lg:px-2 bg-gray-50
       border-b-[1px] border-b-zinc-300
        "
    >
      <div className="hidden lg:block  w-[30%]">
        <Input
          style={{ width: "100%", height: "40px" }}
          className="w-full"
          size="large"
          placeholder="Search"
          prefix={<FiSearch className="text-zinc-400" />}
          suffix={<CiFilter className="text-zinc-400" />}
        />
      </div>

      <div className=" block lg:hidden">
        {sidebarMobileMenu === true ? (
          <span onClick={handelCloseSidebar} className="cursor-pointer">
            <IoMdClose
              className="text-2xl
              text-zinc-700"
            />
          </span>
        ) : (
          <span onClick={handelOpenSidebar} className="cursor-pointer">
            <CgMenuRightAlt
              className="text-2xl
              text-zinc-700"
            />
          </span>
        )}
      </div>

      {/* <div
         onClick={()=>navigate("/wallet-details")}
        className="hidden  w-[12%] h-12 bg-white 
        rounded-3xl shadow-sm lg:flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>
          {
            loading!==true ? <CiWallet className="text-xl" /> : ""
          }
        </span>
        <span 
         
         className="text-zinc-700 font-bold">
          {loading !== true ? (
            <>{`${filterWallet?.currency_name || ""} ${filterWallet?.balance || ""}`}</>
          ) : (
            <>
             <div className="flex justify-center items-center mt-4">
             <ShimmerButton size="sm" />
             </div>
              
            </>
          )}
        </span>
      </div> */}

      <div className="">
        <ul className="flex gap-4 items-center">
          <span className="text-2xl cursor-pointer">
            <MdZoomOutMap />
          </span>
          <span className="text-2xl cursor-pointer">
            <IoIosNotificationsOutline />
          </span>
          <span className="text-2xl cursor-pointer">
            <CiSettings />
          </span>
          <Avatar src={<img src={profile2} alt="avatar" />} />
          <span className="text-xl">{`
            ${authInfo?.authInfo?.first_name} ${authInfo?.authInfo?.last_name}
            `}</span>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
