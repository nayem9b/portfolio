import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerCustomerChat pageId="183080354880130" appId="1365382407432231" />
    <NextUIProvider>
      <App />
      <Toaster />
    </NextUIProvider>
  </React.StrictMode>
);
