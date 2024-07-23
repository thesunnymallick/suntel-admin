import React, { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addLogout } from "../feature/addLoginSlice";
import { FaBoxOpen } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import { GrCatalog } from "react-icons/gr";
import Scrollbars from "rc-scrollbars";
import profile2 from "../assets/profile2.png";
import { IoWalletOutline } from "react-icons/io5";
import apiService from "../utils/apiService";
import circleLogo from "../assets/circleLogo.png";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [walletBalnce, setWalletBalnce] = useState([]);
  const [loading, setLoading] = useState(false);
  const { authInfo } = useSelector((state) => state.login);
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Catalogue", link: "/general", icon: GrCatalog },
    { name: "User", link: "/", icon: AiOutlineUser },
    {
      name: "Gift Card",
      link: "/",
      icon: FiMessageSquare,
      submenu: true,
      submenuItems: [
        {
          name: "Steam",
          link: "/",
        },
        {
          name: "Steam-1",
          link: "/",
        },
        {
          name: "Steam-2",
          link: "/",
        },
        {
          name: "Steam-3",
          link: "/",
        },
      ],
    },
    { name: "Products", link: "/products", icon: FaBoxOpen },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/cart", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { sidebarMobileMenu } = useSelector((state) => state.menus);
  const logoutHandel = () => {
    dispatch(addLogout());
    navigate("/login");
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
    <>
      <div
        className={`bg-blue-800 duration-300 ease-in-out  bg-gradient-to-b overflow-y-hidden
        from-blue-950 h-screen hidden lg:block lg:sticky top-0  z-50 pt-2  ${
          open === true ? "w-60" : "w-20"
        } `}
      >
        <div className="px-5">
          <li
            className="flex items-center  cursor-pointer gap-x-4   
           duration-300 py-2"
          >
            <img className="w-10 h-10 object-cover " src={circleLogo} alt="" />
            {open && (
              <span className="text-white text-base font-bold duration-600">{`
               Suntel Telecom
               `}</span>
            )}
          </li>
        </div>

        <div 
        className="w-full h-full relative ">
          <ul className="pb-0 px-5 ">
            <Scrollbars style={{ height: "65vh" }} autoHide>
              {menus.map((item, index) => {
                return (
                  <>
                    <Link
                      to={item.link}
                      key={index}
                      className={`flex items-center gap-x-4 
                    text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                 ${item?.margin === true ? "mt-9" : "mt-2"}
                `}
                    >
                      <span className="text-2xl block float-left duration-500">
                        {React.createElement(item?.icon)}
                      </span>
                      <span
                        className={`text-base font-medium flex-1 ${
                          !open && "hidden"
                        }`}
                      >
                        {item?.name}
                      </span>
                      {item?.submenu && open && (
                        <MdOutlineKeyboardArrowDown
                          className={`text-xl ${subMenuOpen && "rotate-180"}`}
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                        />
                      )}
                    </Link>

                    {item?.submenu && subMenuOpen && open && (
                      <ul>
                        {item?.submenuItems.map((item, index) => {
                          return (
                            <Link
                              key={item?.name}
                              to={item?.link}
                              className={`flex items-center gap-x-4 
                              text-sm text-gray-300 ml-4 cursor-pointer p-2
                             hover:bg-blue-900 rounded-md
                               duration-300
                              `}
                            >
                              <span className="duration-500">{item?.name}</span>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </>
                );
              })}
            </Scrollbars>
          </ul>
        </div>
        <div
          className="border-t-[1px]
          border-t-zinc-300 py-2 pb-4 px-5 sticky bottom-0 z-50 flex flex-col 
           gap-2 "
        >
          <li 
          onClick={()=>navigate("/profile/personal-info")}
          className="flex items-center cursor-pointer  gap-2   
          duration-300 py-2 rounded-md">
            <img
              className="w-10 h-10 rounded-sm object-cover"
              src={profile2}
              alt=""
            />
            {open && (
              <div className="flex flex-col gap-1">
                <span className="text-white text-base">{`
            ${authInfo?.authInfo?.first_name} ${authInfo?.authInfo?.last_name}
            `}</span>
                <span className="text-zinc-300 text-sm">
                  {authInfo?.authInfo?.email}
                </span>
              </div>
            )}
          </li>

          <li
            onClick={() => navigate("/wallet-details")}
            className={`flex items-center gap-x-4 
              text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 
              rounded-md  duration-300 
             `}
          >
            <span className="text-2xl block float-left duration-500">
              <IoWalletOutline />
            </span>
            {open && (
              <span className="text-base font-medium flex-1">
                {`${filterWallet?.currency_name || ""} ${
                  filterWallet?.balance || ""
                }`}
              </span>
            )}
          </li>

          <li
            onClick={logoutHandel}
            className={`flex items-center gap-x-4 
              text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 
              rounded-md  duration-300 
             `}
          >
            <span className="text-2xl block float-left duration-500">
              <FiLogOut />
            </span>
            {open && (
              <span className={`text-base font-medium flex-1 `}>Log out</span>
            )}
          </li>
        </div>

        <span
          onClick={() => setOpen(!open)}
          className={`w-10 h-10 flex justify-center
            items-center rounded-full bg-blue-800 border-white border-[2px]
           text-white text-xl fixed   ${
             open ? " left-[14.50%]  " : "left-[4%] "
           } ease-in-out duration-300 top-10 cursor-pointer z-50  `}
        >
          <MdArrowBackIosNew
            className={`${
              !open && "rotate-180"
            } transition-transform duration-300 ease-in-out `}
          />
        </span>
      </div>

      {sidebarMobileMenu && (
        <MobileSidebar
          menus={menus}
          subMenuOpen={subMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          logoutHandel={logoutHandel}
          mobileOpen={sidebarMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
