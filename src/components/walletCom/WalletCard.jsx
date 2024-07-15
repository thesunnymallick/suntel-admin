import React from 'react'

const WalletCard = ({
    currencyName,
    balance,
}) => {
    const currencySymbols = {
        USD: '$',
        EUR: '€',
        CNY: '¥',
        INR: '₹',
      };
  return (
    <div className='bg-white rounded-md shadow-sm px-4 py-6'>
      <span className='text-base'>{currencyName}</span>
      <div className='flex items-center gap-1 text-xl text-zinc-800 font-semibold'>
         <span>{currencySymbols[currencyName]}</span>
         <span>{balance}</span>
      </div>
    </div>
  )
}

export default WalletCard
