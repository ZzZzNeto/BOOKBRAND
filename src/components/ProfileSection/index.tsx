"use client";

import Image from 'next/image';
import style from './style.module.scss'
import { useState } from 'react'
import ProfilePicture from 'public/assets/profile.jpg'
import logoInsta from 'public/assets/instagram.png'
import Link from 'next/link';

export default function ProfileSection(){
    
    const [User, setUser] = useState(false)

    if(User){
        return(
            <div className={style.ProfileSection}>
                <Image alt='profile' className={style.image} src={ProfilePicture}/>
                <div className={style.userData}>
                    <h1>Irlan Moreira</h1>
                    <div className={style.instagram}>
                        <Image alt='instagram' width={20} src={logoInsta}/>
                        <p>@irlanarley</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={style.ProfileSection}>
                <Link className={style.link} href='/login'>Login</Link>
            </div>
        )
    }
}