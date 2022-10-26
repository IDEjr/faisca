import { keyframes, style } from 'glamor';
import styles from './writes.module.css';

export default function TypeWrite({text,cursor})
{

	return(
		<div className={styles.holder}>
			<div className="show">
				<style jsx>
					{`
						.show
						{
							background-color: white;
							position: absolute;	
							overflow: hidden;
							
							height: 100%;

							animation: typing1 5s steps(35, end) infinite;
						}

						@keyframes typing1
						{
							0% {
								width: 100%;
								left: 0;		
							}
							
							100% {
								width: 0;
								left: 100%;		
							}
						}
					`}
				</style>
			</div>
			{text}
		</div>
    );

}