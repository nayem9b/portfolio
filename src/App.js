// import logo from "./logo.svg";
import "./App.css";
// import Text from "./Components/Text/Text";
// import Banner from "./Components/Banner/Banner";
// import Navbar from "./Components/Navbar/Navbar";
// import Lottie from "lottie-react";
// import developer from "./images/90497-software-development.json";
import { Link, RouterProvider } from "react-router-dom";
// import motion from "./images/pexels-oleg-lehnitsky-7898649.mp4";
// import Card from "./Components/Card/Card";
// import bookify from "./images/bookify.png";
// import kitchen from "./images/anonna kitchen.png";
// import learn from "./images/learn.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import pdf from "./images/Md Razwan Niam resume.pdf";
// import nayem from "./images/nayem.jpg";
// import ContactMe from "./Components/ContactMe/ContactMe";
import router from "./Components/Routes/Route";
function App() {
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
