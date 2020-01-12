import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
    const { state,dispatch} = useContext(store);

    const handleChange=({target})=>{

    dispatch({field:'start_url',payload:target.value})

}
return (
    
    <div className="input-field col s6">
      <input value={state.start_url} onChange={handleChange} id="starturl" type="text" className="validate"/>
      <label className="active" htmlFor="starturl">Start Url</label>
    </div>
  
)
}