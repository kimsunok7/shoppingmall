import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ["Women", "Men" , "Baby" , "Kids", "H&M HOME", "Sport", "Sale", "지속가능성"]
    const navigate = useNavigate()
    const goToLogin = () =>{
        navigate("/login")
    }
    const home = () => {
        navigate("/")
    }
  return (
    <div>
      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className='nav-section' onClick={home}>
        <img src="https://www2.hm.com/hm-logo.png"></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu)=>(
                <li>{menu}</li>
                ))}
        </ul>
    </div>
        <div className='search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='검색어'></input>
        </div>
    
      
    </div>
  )
}

export default Navbar
