import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = () => {

    return (

        <div className="main-container">

            <Nav />

            <Outlet />

            <Footer />

        </div>
    );
};

export default Layout;