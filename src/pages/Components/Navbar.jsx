import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className='nav-container' >
        <div className='nav-wrapper'>
            <div className="nav-left">
                <div className="nav-language">
                    EN
                </div>
                <div className="nav-search-container">
                    <input className='nav-input' type="text" />
                    <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
                </div>
            </div>
            <div className="nav-center">
                <h1 className="nav-logo">OMA.</h1>
            </div>
              <div className="nav-right">
              <div className="nav-menu-item">
                REGISTER
              </div>
              <div className="nav-menu-item">
                SIGN IN
              </div>
                <div className="nav-menu-item">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon/>
                </Badge>
              </div>
            </div>
        </div>
    </div>
  )
}
