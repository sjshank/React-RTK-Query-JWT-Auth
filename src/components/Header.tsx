import { Stack } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { logOut, selectCurrentToken } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

//Navbar
export const Header: React.FunctionComponent = (): JSX.Element => {
  const token: string | null = useSelector(selectCurrentToken);
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const logoutUser: () => void = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <Stack direction="horizontal" className="justify-content-between pt-3">
        <Nav className="align-self-center">
          <Nav.Item>
            <NavLink to="/" className="fw-bold fs-2 ms-4 m-2">
              (RTK + JWT) Auth
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav className="align-self-center">
          <Nav.Item>
            {!token && (
              <NavLink className="fw-normal fs-4 m-2" to="/login">
                Login
              </NavLink>
            )}
            {token && (
              <a
                className="fw-normal fs-4 m-2"
                role="button"
                onClick={logoutUser}
              >
                Logout
              </a>
            )}
          </Nav.Item>
          <Nav.Item>
            <NavLink className="fw-normal fs-4 m-2 me-4" to="/profile">
              Profile
            </NavLink>
          </Nav.Item>
        </Nav>
      </Stack>
      <hr className="mt-2 mb-5" />
    </>
  );
};
