import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyHook";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyData, error, loading } = useCurrencyInfo(from);
  const options = Object.keys(currencyData || {});

  const convert = () => {
    if (currencyData && currencyData[to]) {
      setConvertedAmount(amount * currencyData[to]);
    } else {
      setConvertedAmount(0); // or show an error message
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/6c/8d/59/6c8d59fa1ec455cb0ceeb5809be70dc8.jpg)`,
      }}
    >
      <div className="w-full">
        <div className="max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
             
             
             
             <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
                rounded-md bg-blue-600 text-white px—2 py—0.5"
                  onClick={() => swap()}
                >
                  swap
                </button>
              </div>




            </div>
 <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(4)}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
               
                selectedCurrency={to}

              /></div>

            <button
             type="submit"
            className="w-full  bg-blue- 600 text-white px-4 py-3  bg-blue-600 rounded-lg"
            >converted from  {from} to {to}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
