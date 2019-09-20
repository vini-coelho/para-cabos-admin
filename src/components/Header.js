import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/images/paracabos-logo-ver.png';

export default () =>
    
    <header id="main-header">
        <div className="header-content">
            <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={logo} alt="Home"/>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <span>LISTA DE PRODUTOS</span>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/newproduct'>
                <span>CADASTRAR PRODUTOS</span>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/orcamentos'>
                <span>ORÇAMENTOS</span>
            </Link>
        </div>
    </header>