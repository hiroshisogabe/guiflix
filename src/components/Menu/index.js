import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="GuiFlix logo" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;