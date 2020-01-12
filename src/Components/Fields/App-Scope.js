import React,{useContext} from "react";
import {store} from '../../store'
export default ()=>{
    const { state,dispatch} = useContext(store);

    const handleChange=({target})=>{

    dispatch({field:'scope',payload:target.value})

}

return (
    
    <div className="input-field col s6">
      <input onChange={handleChange} value={state.scope} id="appscope" type="text" className="validate"/>
      <label className="active" htmlFor="appscope">Application Scope</label>
    </div>
 
)
}