import React, {useEffect} from "react";
import RouterComp from "./router/RouterComp";
import { useSelector } from "react-redux";

function App() {
 const tokenState = useSelector(state => state.login.token);

  useEffect(() => {
    
    const handleUnload = () => {

      if (!tokenState) {
        localStorage.removeItem("token");
      } else {
        localStorage.setItem("token", tokenState)
      }
    };
    
    window.addEventListener('beforeunload',handleUnload );
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    }
  }, []);


  return (
    <div>
      <RouterComp />
    </div>
  );
}

export default App;
