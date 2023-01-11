import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../image/logo.png'

import style from './LogoBlock.module.scss'

const LogoBlock = () => {
    const navigate = useNavigate();

    return (
        <div className={style.logo}>
            <img src={logo} alt="" className={style.img} onClick={() => navigate('/')}/>
        </div>
    );
};

export default LogoBlock;