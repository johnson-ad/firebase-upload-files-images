import './App.css';
import { useState, useEffect } from "react"
import  { storage} from "./data/Data";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4} from 'uuid';

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]); //dispalying all images

  const imageListRef = ref(storage, 'images/');
  const uploadImage = ()=>{
    if (imageUpload ==null ) return;
    const imageRef =ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload ).then((snaphsot)=>{
      // alert("Image Uploaded");
      getDownloadURL(snaphsot.ref).then((url)=>{
        setImageList((prev => [...prev, url]));
    })
  })};

  useEffect(()=>{
    listAll(imageListRef).then(res=>{
      res.items.forEach(item=>{
        getDownloadURL(item).then(url=>{
          setImageList(prev=>[...prev, url])
        });
      
      })
    })
  }, []);

  return (
    <div className="App">
      <input type="file" onChange={(e)=>setImageUpload(e.target.files[0])}/>
      <button onClick={uploadImage}>Upload image</button>
      <br/>

      {imageList.map(url=>{
        return <img src={url} alt=""/>
      })} 
 
    </div>
  );
}

export default App;
