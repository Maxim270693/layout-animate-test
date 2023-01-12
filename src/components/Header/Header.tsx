import React from 'react';

import Money from "../../image/Money.png";
import Background from "../../image/Background.png";
import Girl from "../../image/Girl.png";

import Phone from "../../image/Phone.png";

import Shop from "../Shop/Shop";
import Logos from "../Logos/Logos";

import style from './Header.module.scss';

const Header = () => {
    return (
        <div className={style.header_wrapper}>
            <div className={style.left_block}>
                <div data-aos="fade-down">
                    <h1 className={style.header__title}>
                        Start building your first home deposit today
                    </h1>
                    <h4 className={style.header__title_item}>
                        Open a Nude savings or investment account, boost your deposit with
                        government bonuses and get ideas to buy your home in record time.
                    </h4>
                </div>

                <div data-aos="fade-down" data-aos-delay="200">
                    <p className={style.header__title_text}>
                        Already got a Lifetime ISA? Transferring to Nude only takes 5 minutes.
                    </p>
                    <p className={style.header__title_text}>
                        Install Nude today and start the countdown to buying your first place.
                    </p>
                </div>
                <Shop/>
                <Logos/>
            </div>

            <div className={style.center_block} data-aos="fade-left" data-aos-delay="800">
                <img src={Money} alt="" className={style.money}/>
                <div className={style.center_block_item}>
                    <img src={Background} alt="" className={style.background}/>
                    <img src={Girl} alt="" className={style.girl}/>
                    <p className={style.center_text}>Watch: Nude in under 2 mins</p>
                </div>
            </div>

            <div className={style.right_block} data-aos="fade-left" data-aos-delay="800">
                <img src={Phone} alt=""/>
            </div>
        </div>
    );
};

export default Header;