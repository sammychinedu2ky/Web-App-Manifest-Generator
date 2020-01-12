import React,{useContext} from "react";
import {store} from '../../store'

export default ()=>{
    const { state,dispatch} = useContext(store);
    let color = React.useRef()
   

    const handleChange=({target})=>{
     //color.current.colorpicker()
    dispatch({field:'theme_color',payload:target.value})

}
return (
    
    <div className="input-field col s6">
      <input defaultValue={state.theme_color} onChange={handleChange}  ref={color} id="themecolor" type="text" className="validate"/>
      <label className="active" htmlFor="themecolor" >Theme Color</label>
   </div>
 
)


}