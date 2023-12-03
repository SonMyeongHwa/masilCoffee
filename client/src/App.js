import React, {useEffect} from "react";
import RouterComp from "./router/RouterComp";
import { useSelector } from "react-redux";

function App() {
 const tokenState = useSelector(state => state.login.token);

 


  return (
    <div>
      <RouterComp />
    </div>
  );
}

export default App;
