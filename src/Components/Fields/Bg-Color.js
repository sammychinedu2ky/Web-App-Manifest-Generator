import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
    const { state,dispatch} = useContext(store);

    const handleChange=({target})=>{

    dispatch({field:'background_color',payload:target.value})

}

return (
   
    <div className="input-field col s6">
      <input onChange={handleChange} value={state.background_color} id="bgcolor" type="text" className="validate"/>
      <label className="active" htmlFor="bgcolor">Background Color</label>
    </div>
  
)
}