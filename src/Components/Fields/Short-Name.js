import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
    const { state,dispatch} = useContext(store);

    const handleChange=({target})=>{

    dispatch({field:'short_name',payload:target.value})

}
return (
    
    <div className="input-field col s6">
      <input value={state.short_name} onChange={handleChange}  id="shortname" type="text" className="validate"/>
      <label className="active" htmlFor="shortname">Short Name</label>
    </div>
  
)
}