import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRouteWrapper = () => {
    // const { userData } = useAuth();
    const userData = true;
    // console.log(isLoggedIn)
    return userData ? <Outlet /> : <Navigate to="auth/sign-in" />;
};

export default PrivateRouteWrapper;
