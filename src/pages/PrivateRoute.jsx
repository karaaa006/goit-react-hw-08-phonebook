import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = useSelector((state) => Boolean(state.user.token));
  return auth ? children : <Navigate to="/" />;
}
