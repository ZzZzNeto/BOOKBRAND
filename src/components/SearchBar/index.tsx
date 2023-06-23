import { SearchIcon } from 'lucide-react'
import style from './style.module.scss'
import Button from '../Button'

export default function SearchBar(){
    return (
        <form action="" className={style.form}>
            <input type="text" placeholder="Pesquisar" />
            <Button type='nav'>
                <SearchIcon color='white'/>
            </Button>
        </form>
    )
}