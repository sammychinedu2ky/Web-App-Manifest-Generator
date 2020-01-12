import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
    const { state,dispatch} = useContext(store);
    const handleChange=({target:{value}})=>{
  
if(value==="Any")value=""
    dispatch({field:'orientation',payload:value})

}
return (
    
    <div className="input-field col s6">
    <select value={state.orientation} onChange={handleChange}>
      
      <option value="Any">Any</option>
      <option value="portrait">Portrait</option>
      <option value="landscape">Landscape</option>
      
    </select>
    <label>Orientation</label>
    </div>
 
)
}