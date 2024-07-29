import React from "react";
import { ShimmerCircularImage, ShimmerTable, ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

// Reusable component for shimmering effect in wallet summary sections
const WalletSummaryShimmer = () => (
  <div className='bg-white rounded-md shadow-sm px-4 py-6 h-28'>
    <ShimmerTitle line={2} gap={10} variant="primary" />
  </div>
);

//Main component for displaying wallet balance loading skeleton
export const WalletBalanceLoading = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-zinc-800 font-semibold">Wallet Summary</h2>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <WalletSummaryShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

//// Reusable component for chart sections with a shimmering effect
const ChartShimmer = ({ title, children }) => (
  <div className="w-[50%] h-[30rem] p-4 bg-white shadow-sm rounded-md">
    <div className="flex justify-between pb-3">
      <h2 className="text-zinc-800 font-semibold text-sm">{title}</h2>
    </div>
    <div className="flex justify-center items-center w-full h-[90%]">
      {children}
    </div>
  </div>
);

//// Main component for displaying wallet page loading skeleton
const WalletPageLoading = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-xl text-zinc-800 font-semibold">Wallet Overview</h2>
      </div>

      <div className="flex items-center gap-2 ">
        <ChartShimmer title="Spending Over 12 Months (Bar Chart)">
          <ShimmerThumbnail width={500} height={300} rounded />
        </ChartShimmer>
        <ChartShimmer title="Spending Over 12 Months (Pie Chart)">
          <ShimmerCircularImage size={350} />
        </ChartShimmer>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-md shadow-sm p-4">
          <div className="flex justify-between pb-3">
            <h2 className="text-zinc-800 font-semibold text-sm">All Transactions</h2>
          </div>
          <ShimmerTable row={10} col={4} />
        </div>
      </div>
    </>
  );
};

export default WalletPageLoading;
