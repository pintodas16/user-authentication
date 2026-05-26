// src/Components/ProtectedRoutes.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { token, isInitialized } = useSelector((state) => state.authentication);
  console.log("ProtectedRoute — token:", token, "isInitialized:", isInitialized);

  // ✅ Still verifying token — don't redirect yet
  if (token && !isInitialized) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;