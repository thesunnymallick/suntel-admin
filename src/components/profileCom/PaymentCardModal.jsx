import React from "react";
// import Cards from "react-credit-cards-2";
// import { Input } from "antd";
const PaymentCardModal = () => {
  // const [state, setState] = useState({
  //   number: "",
  //   expiry: "",
  //   cvc: "",
  //   name: "",
  //   focus: "",
  // });

  // const handleInputChange = (evt) => {
  //   const { name, value } = evt.target;

  //   setState((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleInputFocus = (evt) => {
  //   setState((prev) => ({ ...prev, focus: evt.target.name }));
  // };

  return (
    <div>
      <div>
        {/* <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        /> */}
      </div>

      {/* <div>
        <form>
          <div className="flex flex-col gap-1 pb-1">
            <label className="text-zinc-700 font-medium text-sm pb-1">
              Card holder name
            </label>
            <Input size="large" placeholder="Enter card holder name" />
          </div>
          <div className="flex flex-col gap-1 pb-1">
            <label className="text-zinc-700 font-medium text-sm pb-1">
              Card number
            </label>
            <Input size="large" placeholder="XXXX XXXX XXXX" />
          </div>

          <div className="flex items-center justify-between pb-1">
            <div className="flex flex-col gap-1 pb-1">
              <label className="text-zinc-700 font-medium text-sm pb-1">
                Expair Date
              </label>
              <Input size="large" placeholder="01/24" />
            </div>
            <div className="flex flex-col gap-1 pb-1">
              <label className="text-zinc-700 font-medium text-sm pb-1">
                CVV
              </label>
              <Input size="large" placeholder="***" />
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default PaymentCardModal;
