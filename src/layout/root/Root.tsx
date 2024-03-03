import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar/>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
