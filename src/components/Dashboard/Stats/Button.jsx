
const Button = ({ blue, Title }) => {
    return (
        <div className={`rounded-full flex items-center justify-center flex-wrap py-[4px] dark:text-black px-[12px] ${blue == true ? 'bg-[#0866FF] text-white dark:text-white ' : "bg-[#EEEEEE]"} `} >
            {Title}
        </div>
    )
}

export default Button