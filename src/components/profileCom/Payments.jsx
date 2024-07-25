import { Modal, Table, Tag } from "antd";
import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import PaymentCardModal from "./PaymentCardModal";

const Payments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dataSource = [
    {
      companyName: "City Group",
      companyImg: "",
      date: "10-03-24",
      status: "Paid",
      totalAmount: "$200",
    },
    {
      companyName: "Netflix",
      companyImg: "",
      date: "10-05-24",
      status: "Pending",
      totalAmount: "$200",
    },
    {
      companyName: "Netflix",
      companyImg: "",
      date: "10-05-24",
      status: "Failed",
      totalAmount: "$200",
    },
    {
      companyName: "Netflix",
      companyImg: "",
      date: "10-07-24",
      // status:"SCHEDULED",
      status: "Scheduled",
      totalAmount: "$200",
    },
    {
      companyName: "IBM",
      companyImg: "",
      date: "10-07-24",
      // status:"SCHEDULED",
      status: "Failed",
      totalAmount: "$200",
    },
  ];

  const columns = [
    {
      title: "Recipient",
      dataIndex: "companyName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        let color;
        switch (record.status) {
          case "Pending":
            color = "orange";
            break;
          case "Paid":
            color = "green";
            break;
          case "Failed":
            color = "red";
            break;
          case "Scheduled":
            color = "blue";
            break;
          default:
            color = "gray"; // default color if status is not matched
        }
        return <Tag color={color}>{record.status}</Tag>;
      },
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
    },
    {
      title: "Action",
      dataIndex: "",
      render: () => {
        return (
          <TbListDetails className="text-xl text-zinc-600 cursor-pointer" />
        );
      },
    },
  ];
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm px-2">
      <div className="py-6 px-4">
        <h2 className="text-zinc-800 font-semibold text-xl">Payment Card</h2>
        <div className="mt-4 flex justify-center">
          <div
           onClick={()=>setIsOpen(true)}
            className="w-[40%] rounded-md h-48 border-[2px] border-dashed border-blue-300
             flex justify-center items-center shadow-sm bg-blue-50 cursor-pointer"
          >
            <h2 className="text-blue-700 font-medium text-xl">ADD NEW CARD</h2>
          </div>
        </div>

        <h2 className="text-zinc-800 font-semibold text-xl mt-4">
          Payment history
        </h2>
        <div className="px-4 py-6">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>

      <Modal
        title={null}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        closable={false}
        centered
      >
      <PaymentCardModal/>
      </Modal>
    </div>
  );
};

export default Payments;
