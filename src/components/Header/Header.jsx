import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../static/images/logo.png';
import { HeaderWrap, HeaderImg, HeaderNav } from './Header.styled';

class Header extends Component {
    render() {
        return(
            <HeaderWrap>
                <HeaderImg src={logo} alt="ItWill sistem integrator"/>
                <HeaderNav>
                    <NavLink activeClassName ="link__active" to="/home">О нас</NavLink>
                    <NavLink activeClassName = "link__active" to="/contacts">Контакты</NavLink>
                </HeaderNav>
            </HeaderWrap>
        )
    }
};

export default Header;