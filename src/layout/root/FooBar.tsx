import { Outlet } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
