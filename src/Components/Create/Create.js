import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FirebaseContext,AuthContext } from "../../store/FirebaseContext";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name,Setname]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');
  const [image,setImage]=useState(null);
  const { Firestore } = useContext(FirebaseContext);
  const {user}=useContext(AuthContext)
  const date=new Date()
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const storage = getStorage();
    
    const images=ref(storage,`/images/${image.name}`)
    uploadBytes(images,image).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then(async(url)=>{
        console.log(url)
        await addDoc(collection(Firestore,'Products'),{
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })}).then(()=>{
        navigate('/')
      }) 
    }).catch((error)=>{
      console.log(error.message)
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="Name"
              value={name}
              onChange={(e)=>Setname(e.target.value)}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="number" id="price" name="Price" value={price}
              onChange={(e)=>setPrice(e.target.value)}/>
            <br />
   
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file" 
              onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
