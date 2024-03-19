import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";
type PrivateRouteProps = {
  element: React.ReactNode;
  path?: string;
};
export const PrivateRoutes: React.FC<PrivateRouteProps> = () => {
  const user = useAppSelector((state) => state?.userData?.user);
  if (!user) {
    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
