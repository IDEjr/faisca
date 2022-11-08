import style from './box.module.css';

export default function Box(props)
{
    let child;
    if(!props.children) child = <></>;
    else child = props.children;

    let style_final;
    
    switch(props.type)
    {
        case "vertical" : style_final = style.vertical;
                          break;
        default : style_final = style.default;
    }

    return(        
        
        <div className={ style_final }>
            {child}
        </div>        
    );

}