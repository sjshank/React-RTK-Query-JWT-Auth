import { Location, Navigate, useLocation } from "react-router-dom";
import { selectCurrentToken } from "../store/auth/authSlice";
import { useSelector } from "react-redux";

type ProtectedRouteProps = {
  children: JSX.Element;
};

//This component will check if token exists or not. If not redirect user to home page
const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const token : string | null = useSelector(selectCurrentToken);
  const location : Location<any>= useLocation();
  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
