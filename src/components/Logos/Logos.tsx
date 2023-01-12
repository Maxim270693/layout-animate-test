import React from 'react';

import London from "../../image/London.png";
import Glamour from "../../image/Glamour.png";
import Courier from "../../image/Courier.png";
import Yahoo from "../../image/Yahoo.png";
import Finextra from "../../image/Finextra.png";
import Featured from "../../image/Featured.png";
import AppOfTheDay from "../../image/AppOfTheDay.png";

import style from './Logos.module.scss';

const Logos = () => {
    return (
        <div className={style.logos} data-aos="fade-up-right" data-aos-delay="600">
            <img src={London} alt=""/>
            <img src={Glamour} alt="" className={style.logos__img}/>
            <img src={Courier} alt="" className={style.logos__img}/>
            <img src={Yahoo} alt=""/>
            <img src={Finextra} alt="" className={style.logos__img}/>
            <img src={Featured} alt="" className={style.logos__img}/>
            <img src={AppOfTheDay} alt=""/>
        </div>
    );
};

export default Logos;