import react from 'react';
import Link from 'next/link';

import style from './../styles/header.module.css';

export default function Header(props)
{
    let { menus } = props;

    return(
        <>
            <div className={style.container} >
                <div className={style.container_logo}>
                    Header Exemplo
                </div>
                <nav className={style.container_navbar}>
                    {menus.map(({label, link}, index) => 
                        <Link key={index} href={link}><a className={style.container_button}>{label}</a></Link>
                    )}
                </nav>
            </div>
        </>
    );

}