import React from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

const CreditCardForm = () => {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps, wrapperProps } = usePaymentInputs();
  return (
    <div>
<PaymentInputsWrapper {...wrapperProps} className="flex flex-col gap-4">
      <div className="relative">
        <input
          {...getCardNumberProps()}
          placeholder="Card Number"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <svg {...getCardImageProps()} className="absolute top-4 right-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="flex gap-4">
        <input
          {...getExpiryDateProps()}
          placeholder="MM/YY"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <input
          {...getCVCProps()}
          placeholder="CVC"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
    </PaymentInputsWrapper>
    </div>
  )
}

export default CreditCardForm
