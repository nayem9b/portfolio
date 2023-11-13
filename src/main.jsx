import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerCustomerChat pageId="183080354880130" appId="168501859620532" />
    <App />
  </React.StrictMode>
);
