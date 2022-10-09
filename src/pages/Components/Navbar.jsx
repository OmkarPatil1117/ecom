import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className='nav-container' >
        <div className='wrapper'>
            <div className="left">
                <div className="language">
                    EN
                </div>
                <div className="search-container">
                    <input className='input' type="text" />
                    <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
                </div>
            </div>
            <div className="center">
                <h1 className="logo">OMA.</h1>
            </div>
              <div className="right">
              <div className="menu-item">
                REGISTER
              </div>
              <div className="menu-item">
                SIGN IN
              </div>
                <div className="menu-item">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon/>
                </Badge>
              </div>
            </div>
        </div>
    </div>
  )
}
