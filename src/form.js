import React,{useRef} from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";


const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!,$manifest:String) {
    uploadFile(file: $file,manifest:$manifest)
  }
`;
function base64ImageToBlob(str) {
    // extract content type and base64 payload from original string
   
  
    // decode base64
    var imageContent = atob(str);
  //console.log(imageContent.toString('base64'));
    // create an ArrayBuffer and a view (as unsigned 8-bit)
    //var buffer = new ArrayBuffer(imageContent.length);
    var view = new Uint8Array(imageContent.length);
  
    // fill the view, using the decoded base64
    for(var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
  console.log([view])
    // convert ArrayBuffer to Blob
    var blob = new Blob([view], { type: 'application/zip' });
  
    return blob;
  }

export default  () => {
  const [uploadFile,{data}] = useMutation(uploadFileMutation);
  let manifest = useRef()
  let pic = useRef()
  if(data){
    // var blob = new Blob(null, {type : 'application/zip'});
    // var enc = btoa(data);
   let blob = base64ImageToBlob(data.uploadFile)
    //let blob = atob(data)
   var url = window.URL.createObjectURL(blob);
     
     var a = document.createElement('a');
     a.href = url;
     a.download = "filename.zip";
     document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
     a.click();    
     // a.remove();
   }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    let {files:[file]} = pic.current
    console.log(file)
    let obj = manifest.current.value
   uploadFile({variables:{file,manifest:obj}})
}


  return (
    <div >
      <form  onSubmit={handleSubmit}>
          <label htmlFor="manifest">Manifest</label>
          <input type="text" id="manifest" ref={manifest} name="manifest" defaultValue='{"theme_color": "#2196f3","background_color": "#2196f3","display": "standalone","orientation": "portrait","Scope": "/","start_url": "/"}'/>
        <label htmlFor="pic">Pic</label>
        <input id="pic" ref = {pic} name="pic" type="file"/>
        <input type="submit" value="submit"/>
             </form>
    
    </div>
  );
};
