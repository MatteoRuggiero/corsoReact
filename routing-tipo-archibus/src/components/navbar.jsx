import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";

const Navbar = () => {


  return (
    <>
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Home</span>
                    </NavLink>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <NavLink to="/Lorenzo" className="px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Lorenzo</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Matteo" className="px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Matteo</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Mauro" className="px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Mauro</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col py-3">
                <Outlet />
            </div>
        </div>
    </div>

    </>
  );
};

export default Navbar;
