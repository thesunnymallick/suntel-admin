import React, { useState } from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import CardItem from "../components/dashboardCom/CardItem";
import netflixImge from "../assets/netflixBg.jpg";
import { Button, Input, Modal, Select } from "antd";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

const { Search } = Input;
const AllProducts = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex gap-6 bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="lg:px-6 block lg:flex  gap-2 px-2">
          <div
            className="fixed flex items-center  
          lg:hidden top-[9%]  py-2 z-40 bg-zinc-50 w-full "
          >
            <div className="w-[60%] ml-6">
              <Input
                style={{ width: "100%", height: "35px" }}
                className="w-full"
                size="large"
                placeholder="Search"
                prefix={<FiSearch className="text-zinc-400" />}
                suffix={<CiFilter className="text-zinc-400" />}
              />
            </div>
            <div className="w-[20%] ml-2">
              <Button
                style={{ width: "100%" }}
                onClick={() => setShowModal(true)}
                type="primary"
              >
                Filter
              </Button>
            </div>
          </div>
          <div className="w-[20%] hidden lg:block fixed top-[16%] left-[17%]">
            <div
              className="w-[100%] rounded-md shadow-sm
               bg-white px-6 py-4"
            >
              <h2 className="text-zinc-800 text-xl font-bold">Filter</h2>

              <div className="p-2 flex flex-col gap-y-1 pt-4">
                <span className="text-base text-zinc-700 font-semibold">
                  Search
                </span>
                <Search
                  placeholder="input search text"
                  enterButton="Search"
                  size="large"
                  // suffix={suffix}
                  // onSearch={onSearch}
                />
              </div>

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">
                  Region
                </span>

                <Select
                  style={{ width: "100%", height: "40px" }}
                  placeholder="Select Region"
                ></Select>
              </div>

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">
                  Currency
                </span>
                <Select
                  style={{ width: "100%", height: "40px" }}
                  placeholder="Select Currency"
                ></Select>
              </div>

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">
                  Brand
                </span>
                <Select
                  style={{ width: "100%", height: "40px" }}
                  placeholder="Select Brand"
                ></Select>
              </div>

              <div className="flex justify-between p-2 ">
                <Button>Reset</Button>
                <Button type="primary">OK</Button>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-12 lg:mt-0 lg:w-[80%] lg:ml-[23%] overflow-hidden">
            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row1</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row2</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row3</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row4</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Modal
          title="Filter"
          open={showModal}
          onOk={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          width={600}
          footer={null}
        >
          <div
            className="w-[100%] rounded-md 
              px-4 py-4"
          >
            <h2 className="text-zinc-800 text-xl font-bold">Filter</h2>

            <div className="p-2 flex flex-col gap-y-1 pt-4">
              <span className="text-base text-zinc-700 font-semibold">
                Search
              </span>
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                // suffix={suffix}
                // onSearch={onSearch}
              />
            </div>

            <div className="p-2 flex flex-col gap-y-1 pt-2">
              <span className="text-base text-zinc-700 font-semibold">
                Region
              </span>

              <Select
                style={{ width: "100%", height: "40px" }}
                placeholder="Select Region"
              ></Select>
            </div>

            <div className="p-2 flex flex-col gap-y-1 pt-2">
              <span className="text-base text-zinc-700 font-semibold">
                Currency
              </span>
              <Select
                style={{ width: "100%", height: "40px" }}
                placeholder="Select Currency"
              ></Select>
            </div>

            <div className="p-2 flex flex-col gap-y-1 pt-2">
              <span className="text-base text-zinc-700 font-semibold">
                Brand
              </span>
              <Select
                style={{ width: "100%", height: "40px" }}
                placeholder="Select Brand"
              ></Select>
            </div>

            <div className="flex justify-between p-2 ">
              <Button>Reset</Button>
              <Button type="primary">OK</Button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default AllProducts;
