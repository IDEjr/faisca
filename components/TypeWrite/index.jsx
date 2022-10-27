import React from 'react';
import styles from './writes.module.css';

export default function TypeWrite({text,cursor})
{
	const animate = {
		animation: `typing ${text.length/10}s steps(${text.length}, end) ${cursor ?`, blink 1s step-end infinite` :''}`,
		};
	if(cursor){
		animate.borderRight = '.15em solid black'; 
	}
	return(
		<div className={styles.holder}>
			<style jsx>
				{`
					@keyframes typing {
						0% { width: 0; }
						100% { width: 100%; }
					}
					@keyframe blink{
						from, to {border-color: transparent }
						50% {border-color: black}
					}
				`}
			</style>
			<h1 className={styles.base} style={animate}>{text}</h1>
		</div>
    );
}