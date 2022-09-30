import style from './../styles/box.module.css';

export default function Box(props)
{
    let child;
    if(!props.children) child = <></>;
    else child = props.children;    

    return(        
        
        <div className={props.vertical ? style.vertical : style.default }>
            {child}
        </div>        
    )

}