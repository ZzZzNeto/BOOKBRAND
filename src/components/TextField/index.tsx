interface ITextField {
    placeholder : string
    type : 'password'|'text'
}

export default function TextField({placeholder, type} : ITextField){
    return (
        <input type={type}  className="text-gray-300 mb-[27px] border-[1px] text-[20px] border-gray-300 h-[45px] w-[430px] p-3" placeholder={placeholder} />
    )
}