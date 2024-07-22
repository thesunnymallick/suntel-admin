import { Steps } from 'antd'
import React from 'react'

const Steper = () => {
  return (
    <div className="px-6 py-2 fixed w-[80%]  top-[10%] bg-zinc-50">
    <Steps
      current={1}
      items={[
        {
          title: "Cart",
          description: "This is cart checkout",
        },
        {
          title: "Payment",
          description:"This is Payment CheckOut",
          subTitle: "Left 00:00:08",
        },
        {
          title: "Order Done",
          description :"succefully order success",
        },
      ]}
    />
  </div>
  )
}

export default Steper
