import React from 'react';
import styles from './writes.module.css';
import {css} from 'glamor';
/*
	para centralizar esse componente só colocar ele dentro de um div com style
		display: flex;
		justify-content: center;
*/
export default function TypeWrite({text,cursor})
{
	let typing = css.keyframes('typing',{
		'0%': { width: '0' },
		'100%': { width: '100%' }
	});
	let blink = css.keyframes('blink',{
		'from, to': { borderColor: 'transparent' },
		'50%': { borderColor: 'black' }
	});

	const base = {
		overflow: 'hidden',
		whiteSpace: 'nowrap',	
		margin: '0 auto',
		letterSpacing: '.10em'
	}
	if(cursor){
		base.borderRight = '.15em solid black'; 
	}


    return(
		<div className={styles.holder}>        
			<h1 {...css({
				animation: `${typing} ${text.length/10}s steps(${text.length}, end)
					${cursor ?`, ${blink} 1s step-end infinite` :''}`,
				...base
			})}>
				{text}
			</h1>        
		</div>
    );

}