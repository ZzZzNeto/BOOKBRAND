'use client'
import httpRequest from '@/services/api'
import BookSimple from '@/components/BookSimple'
import { useEffect, useState } from 'react'

export default function Home() {

  const [books,setBooks] = useState([])

  const get_books = async () => {
    const response = await httpRequest.get('books')
    setBooks(response.data)
  }

  useEffect (() => {
    get_books()
  },[])

  return (
    <div className='bg-white h-[calc(100vh-180px)] w-full mx-[67px]'>
      <h1 className='ml-[30px] my-[33px] font-bold text-5xl text-[#8239F2]'>Encontre as melhores indicações de livros</h1>
      <div className='flex items-start justify-start flex-wrap pt-[15px] px-[29px]'>
        {
          books.map( (item, i) => (
            <BookSimple key={i} id={item.id} image={item.image}/>
          ) )
        }  
      </div>
    </div>
  )
}
