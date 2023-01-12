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
            <img src={London} alt="logo london"/>
            <img src={Glamour} alt="logo glamour" className={style.logos__img}/>
            <img src={Courier} alt="logo courier" className={style.logos__img}/>
            <img src={Yahoo} alt="logo yahoo"/>
            <img src={Finextra} alt="logo finextra" className={style.logos__img}/>
            <img src={Featured} alt="logo featured" className={style.logos__img}/>
            <img src={AppOfTheDay} alt="logo AppOfTheDay"/>
        </div>
    );
};

export default Logos;