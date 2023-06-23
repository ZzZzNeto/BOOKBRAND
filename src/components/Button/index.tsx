import style from './style.module.scss'

interface ButtonProps {
    children : React.ReactNode
    type ?: 'green'|'red'|'nav'|'green_login'|'purple_login'
}

export default function Button({children, type}:ButtonProps){
    return (
        <button className={`${style.button} ${type && style[type]}`}>
            {children}
        </button>
    )
}