import React,{useContext} from "react";

import { store } from "../../store";
export default ()=>{
 
const { state,dispatch} = useContext(store);

const handleChange=({target})=>{
dispatch({field:'name',payload:target.value})
}

return (
   
    <div className="input-field col s6">
      <input onChange={handleChange} value={state.name} id="appname" type="text" className="validate"/>
      <label className="active" htmlFor="appname">App Name</label>
    </div>
 
)
}
