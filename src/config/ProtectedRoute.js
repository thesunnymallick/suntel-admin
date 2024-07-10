import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
  const {authInfo}=useSelector((state)=>state.login);
  const navigate=useNavigate()
  if(authInfo.isAuth!==true){
     navigate("/login")
  }

  return children;
}

export default ProtectedRoute
