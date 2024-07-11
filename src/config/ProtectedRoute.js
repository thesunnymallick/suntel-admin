import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({authInfo,children}) => {

  // const navigate=useNavigate()
  const [loading, setLoading] = useState(true);
   console.log(authInfo?.isAuth)
  useEffect(() => {
    if (authInfo !== undefined) {
      setLoading(false);
    }
  }, [authInfo]);

  if (loading) {
    return null; // or a loading spinner, e.g., <Loading />
  }

  if (authInfo?.isAuth !== true) {
    return <Navigate to="/login" replace />;
  }

  return children;


}

export default ProtectedRoute
