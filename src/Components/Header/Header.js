import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext} from '../../store/FirebaseContext';
import { signOut,getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Header() {
  const {user}=useContext(AuthContext)
 
  const navigate=useNavigate();

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            navigate('/login')
          }}>{user?user.displayName:'Login'}</span>
         
          <hr />
          
        </div>
        <span onClick={()=>{
          const auth=getAuth()
          signOut(auth)
          navigate('/login')
        }}>{user&&'Logout'}</span>
        
        {user && (
        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent" onClick={() => navigate('/create')}>
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Header;
