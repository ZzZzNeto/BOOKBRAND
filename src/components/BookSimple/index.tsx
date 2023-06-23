import Image from "next/image";
import Link from "next/link";

interface IBookSimple{
    id : number
    image : string
}

export default function BookSimple({image, id} : IBookSimple){
    
    return (
        <Link className="m-[15px]" href={`/book_detail/${id}`}>
            <Image alt='livro' height={250} width={150} src={image}/>
        </Link>
    )
}