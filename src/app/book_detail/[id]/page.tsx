'use client'
import { StarIcon } from 'lucide-react'
import Button from '@/components/Button'
import Comment from '@/components/Comment'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import httpRequest from '@/services/api'

interface IBookDetail{
    params: {
        id : number
    }
}

export default function BookDetail({params} : IBookDetail) {
    const [book,setBook] = useState()
    const [comments,setComments] = useState([])

    const get_book = async () => {
        const response = await httpRequest.get(`books/${params.id}`)
        setBook(response.data)

        const comments = await httpRequest.get(`comments/`,{ params: { bookId: params.id } })
        setComments(comments.data)
    }

    useEffect (() => {
        get_book()
    },[])

    return (
        <div className='bg-white h-full w-full pt-[46px] px-[65px] flex mx-[67px] mt-[150px]'>
            <div className='mr-[45px]'>
                <Image alt='book' height={300} width={200} src={book?.image}/>
                <h1 className='font-bold text-[20px] my-[5px] text-[#8239F2]'>{book?.title}</h1>
                <p className='text-[18px] text-gray-700'>Lorem ipsum dolor sit amet</p>
                <p className='text-[16px] text-[#008FCC]'>{book?.author}</p>
                <div className='flex my-[20px]'>
                    <StarIcon color='yellow' fill='yellow'/>
                    <StarIcon color='yellow' fill='yellow'/>
                    <StarIcon color='yellow' fill='yellow'/>
                    <StarIcon color='yellow' fill='yellow'/>
                    <StarIcon color='gray' fill='gray'/>
                </div>
                <Button type='green'>
                    <p className='text-white'>Adicionar a biblioteca</p>
                </Button>
            </div>
            <div>
                <h1 className='font-bold text-5xl text-[#8239F2] mb-[20px]'>{book?.title}</h1>
                <div className='flex items-center'>
                    <div className='bg-green-600 p-[15px] rounded-[15px]'>
                        <p className='text-white text-[28px]'>4.5</p>
                    </div>
                    <p className=' ml-[15px] text-[28px] text-gray-700'>65 avaliações</p>
                </div>
                <p className='text-[14px] text-gray-400 my-[18px]'>Irlan Moreira º 8 Jan 21</p>
                <p className='my-[20px] text-[20px] text-gray-700'>{book?.abstract}</p>
                <h1 className='font-bold mb-[20px]'>Comentarios: </h1>
                <div>
                    {comments.map( (comment, i) => (
                        <Comment key={i} userId={comment?.userId} text={comment?.text} likes={comment?.likes}/>
                    ))}
                </div>
            </div>
        </div>
    )
}