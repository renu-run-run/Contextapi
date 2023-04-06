import { useContext } from "react";
import myContext from "./context";
const D = () => {
  const data = useContext(myContext);
    return(
        <>
          <h1>Component D</h1>
          <p style={{color:"red"}}>Data from A:{data}</p>
           
        </>
    )
}

export default D;