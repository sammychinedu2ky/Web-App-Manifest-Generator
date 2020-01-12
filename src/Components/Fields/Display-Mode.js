import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
  
    const { state,dispatch} = useContext(store);

    const handleChange=({target:{value}})=>{

    dispatch({field:'display',payload:value})

}

return (
    
    <div className="input-field col s6">
    <select value={state.display} onChange={handleChange}>
     <option value="browser">Browser</option>
      <option value="standalone">Standalone</option>
      <option value="minimal-ui">Minimal UI</option>
      <option value="fullScreen">FullScreen</option>
    </select>
    <label>Display Mode</label>
    </div>
 
)
}