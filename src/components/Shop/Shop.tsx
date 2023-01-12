import React from 'react';
import AppStore from "../../image/AppStore.png";
import GooglePlay from "../../image/GooglePlay.png";

import style from "./Shop.module.scss";

const Shop = () => {
    return (
        <div className={style.shop} data-aos="fade-down" data-aos-delay="400">
            <img src={AppStore} alt="" className={style.header__appStore}/>
            <img src={GooglePlay} alt="" className={style.header__googlePlay}/>
        </div>
    );
};

export default Shop;