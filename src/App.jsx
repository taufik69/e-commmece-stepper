import CheckoutStepper from "./Conponent/CheckoutStepper";
function App() {
  const checkoutStep = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details</div>,
    },
    {
      name: "Shooping Info",
      Component: () => <div>Enter your shopping adress</div>,
    },

    {
      name: "Payement Info",
      Component: () => <div>Complete payment for your order</div>,
    },
    {
      name: "Delevered",
      Component: () => <div>Your order has benn Delevered</div>,
    },
  ];
  return (
    <>
      <h1>Checkout steepr</h1>
      <CheckoutStepper stepConfig={checkoutStep} />
    </>
  );
}

export default App;
