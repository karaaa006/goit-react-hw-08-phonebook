import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = function ({ children }) {
  const auth = useSelector((state) => Boolean(state.user.token));
  return auth ? children : <Navigate to="/" />;
};
