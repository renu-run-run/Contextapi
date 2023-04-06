import myContext from "./context";
import B from "./B";
import { useState } from "react";

const A = () => {
  const [state, setState] = useState("");
  const [dataSend, setDataSend] = useState("")
    return(
        <>
          <h1>Component A</h1>
          <input type="text" onChange={(e) => setState(e.target.value)} placeholder="Enter value"/>
          <button onClick={()=>setDataSend(state)} >Send Data</button>
          <hr/>
          <myContext.Provider value={dataSend}>
          <B/>
          </myContext.Provider>
          
        </>
    )
}

export default A;