import Image from "next/image"
import Logo from "public/assets/logo.png"
import SearchBar from "../SearchBar"
import style from './style.module.scss'
import ProfileSection from "../ProfileSection"
import Link from "next/link"

export default function Header(){
    return (
        <header className={style.header}>
            <Link href={'/'}><Image alt="logo" src={Logo}/></Link>
            <SearchBar/>
            <ProfileSection/>
        </header>
    )
}