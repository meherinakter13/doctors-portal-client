import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../../Shared/Navbar/Navbar';
import'./Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;