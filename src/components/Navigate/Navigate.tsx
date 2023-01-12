import React from 'react';
import {Link} from "react-router-dom";

import style from './Navigate.module.scss'

const Navigate = () => {
    return (
        <div className={style.navigate}>
            <div className={style.navigate_title}>Nude<span className={style.symbol}>®</span>
                <span className={style.navigate_symbol}>®</span>
            </div>
            <nav>
                <div className={style.navigate_block}>
                    <Link to="LifetimeISA">
                        Lifetime ISA
                    </Link>
                    <Link to="Blog">
                        Blog
                    </Link>
                    <Link to="Pact">
                        Pact
                    </Link>
                    <Link to="Purpose">
                        Purpose
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navigate;