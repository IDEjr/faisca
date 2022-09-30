import react from 'react';
import Link from 'next/link';
import Script from "next/script";

import style from './../styles/header.module.css';

export default (props) =>
{
    let { menus } = props;

    return(
        <>
            <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>        
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