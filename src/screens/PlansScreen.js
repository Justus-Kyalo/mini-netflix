import React from "react";
import "./PlansScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { closePaymentModal, FlutterWaveButton } from "flutterwave-react-v3";

function PlansScreen() {
  const user = useSelector(selectUser);

  // Function to create a fwConfig object with a specific amount
  const createFWConfig = (amount) => {
    const config = {
      public_key: "FLWPUBK_TEST-ab708a8d0855a35eb5370538c67677a5-X",
      tx_ref: Date.now(),
      amount: amount,
      currency: "KES",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: user.email,
        phone_number: "070********",
        name: user.name,
      },
      customizations: {
        title: "Netflix",
        description: "Netflix Premium Payment",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const fwConfig = {
      ...config,
      text: "Subscribe",
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    };

    return fwConfig;
  };

  // createfwConfig objects for each plan with the corresponding amount
  const premiumFWConfig = createFWConfig(1100);
  const standardFWConfig = createFWConfig(700);
  const basicFWConfig = createFWConfig(300);

  return (
    <div>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <FlutterWaveButton {...premiumFWConfig} />
      </div>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <FlutterWaveButton {...standardFWConfig} />
      </div>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <FlutterWaveButton {...basicFWConfig} />
      </div>
    </div>
  );
}

export default PlansScreen;
