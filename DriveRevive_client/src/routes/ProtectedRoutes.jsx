import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};
ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
