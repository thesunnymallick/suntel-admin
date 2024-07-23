import React from "react";
import { ShimmerCircularImage, ShimmerSectionHeader, ShimmerTable, ShimmerText, ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

export const WalletBalanceLoading = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-zinc-800 font-semibold">Wallet Summary</h2>
      </div>
      <div
        className="mt-2 
              grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2"
      >
      <div className='bg-white rounded-md shadow-sm px-4 py-6 h-28'>
      <ShimmerTitle line={2} gap={10} variant="primary" />
       </div>
       <div className='bg-white rounded-md shadow-sm px-4 py-6 h-28'>
      <ShimmerTitle line={2} gap={10} variant="primary" />
       </div>
       <div className='bg-white rounded-md shadow-sm px-4 py-6 h-28'>
      <ShimmerTitle line={2} gap={10} variant="primary" />
       </div>
       <div className='bg-white rounded-md shadow-sm px-4 py-6 h-28'>
      <ShimmerTitle line={2} gap={10} variant="primary" />
       </div>
       

      </div>
    </div>
  );
};
const WalletPageLoading = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-xl text-zinc-800 font-semibold">Wallet Overview</h2>
      </div>

      <div className="flex items-center gap-2 ">
        <div className="w-[50%] h-[30rem] p-4 bg-white shadow-sm rounded-md">
          <div className="flex justify-between pb-3">
            <h2 className="text-zinc-800 font-semibold text-sm">
              Spending Over 12 Months (Bar Chart)
            </h2>
          </div>
          <div className="flex justify-center items-center w-full h-[90%]">
            {/* <StatBarChart stat={filterWallet[0]?.stat} /> */}
            <ShimmerThumbnail width={500} height={300} rounded  />
         
          </div>
        </div>
        <div className="w-[50%] h-[30rem]  p-4 bg-white shadow-sm rounded-md ">
          <div className="flex justify-between pb-3">
            <h2 className="text-zinc-800 font-semibold text-sm">
              Spending Over 12 Months (Pie Chart)
            </h2>
          </div>
          <div className="flex justify-center items-center w-full h-[90%]">
        
            <ShimmerCircularImage size={350}/>
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
            <ShimmerTable row={10} col={4} />
        </div>
      </div>
    </>
  );
};

export default WalletPageLoading;
