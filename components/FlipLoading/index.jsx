import style from './FlipLoading.module.css'

function div_default()
{
    return <div className={style.rectangle}/>
}

export default function FlipLoading(props)
{
    return (
        <div className={style.spin_animation}>
            {props.component ? props.component : div_default()}
        </div>
    )
}