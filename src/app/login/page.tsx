import Image from "next/image";
import logo from '@/../public/assets/logoBig.png'
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className='bg-white h-full w-full flex'>
        <div className="bg-[#ECFAFF] h-full w-[40%] flex flex-col items-center justify-center px-[70px]">
            <h1 className="text-[48px] text-[#8239F2] font-bold pb-[80px]">Compartilhe suas dicas de leitura com os seus amigos</h1>
            <Image alt="logo" src={logo}/>
        </div>
        <div className="flex flex-col items-center justify-center w-[60%] ">
          <TextField type="text" placeholder="E-mail"/>
          <TextField type="password" placeholder="Senha"/>
          <Link href='/'>
          <Button type="green_login">
            <p className="text-[18px] text-white">Entrar</p>
          </Button>
          </Link>
          <p className="text-[16px] my-[27px] text-[#43E8BE]">Esqueceu a senha?</p>
          <Button type="purple_login">
            <p className="text-[18px] text-white">Criar nova conta</p>
          </Button>
        </div>
    </div>
  )
}
