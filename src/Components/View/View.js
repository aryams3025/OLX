import React,{useEffect,useState,useContext} from 'react';


import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
function View() {
  const [userDetails,setUser]=useState('');
  const {postDetails}=useContext(PostContext);
  const {Firestore}=useContext(FirebaseContext)
  useEffect(() => {
    const getUsers = async () => {
      try {
        console.log(postDetails)
        const {userId}=postDetails 
        const q = query(collection(Firestore, "users"), where("id", "==", userId));
        const snapshot = await getDocs(q);
        const userDetails = snapshot.docs[0].data();
        setUser(userDetails)
        // You can set the usersData state here or process it further
         // Log the fetched user data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, [Firestore,postDetails]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>
        }     
      </div>
    </div>
  );
}
export default View;
