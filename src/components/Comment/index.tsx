import { HeartIcon } from 'lucide-react'


interface IComment{
    userId : number
    text : string
    likes : number
}

export default function Comment({userId,text,likes} : IComment){
    return (
        <div className="flex p-[10px]">
            <div className="rounded-full h-[80px] w-[80px] bg-gray-200"> <p className='w-[80px]'>a</p> </div>
            <div className='w-full ml-[20px] bg-gray-200 p-[20px] rounded-lg'>
                <p>{text}</p>
                <div className='flex items-center mt-[20px]'>
                    <HeartIcon color='#D11A1A' fill='#D11A1A'/>
                    <p className='text-[#D11A1A] text-[16px] ml-[5px]'>{`gostei (${likes})`}</p>
                </div>
            </div>
        </div>
    )
}