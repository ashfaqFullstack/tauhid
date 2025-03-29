import { ModeToggle } from '@/components/Buttons/ModeToggle'
import { Search } from 'lucide-react'

const Header = ({ Title }) => {
    return (
        <div className='flex justify-between ' >
            {/* title of the header //**username**\\ */}
            <div className='text-bold text-[40px] md:text-[48px] lg:text-[54px] flex relative w-fit h-fit' >
                <div className='h-fit w-fit leading-[44px]' >
                    Hi {Title}
                </div>
                <div className='w-[12px] h-[12px] bg-btn rounded-full absolute bottom-0 right-[-12px] '></div>
            </div>
            <div className='flex items-center gap-[20px] lg:gap-[30px] xl:gap-[42px]' >
                {/* input  */}
                <div className='relative w-fit'>
                    <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white'>
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='pl-10 pr-4 py-2 w-[100px] sm:w-[150px] md:w-[200px] xl:w-auto rounded-lg bg-[#F7F8FA] dark:bg-[#272727] dark:text-white dark:placeholder:text-white outline-none'
                    />
                </div>
                {/* Mode switcher //**Light and Dark Mode**\\ */}
                <div className='flex gap-[15px] items-center  flex-col md:flex-row' >
                    <div className='text-[#494949] dark:text-white text-sm md:text-md' >Dark Mode</div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header