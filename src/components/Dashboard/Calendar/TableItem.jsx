import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import { CirclePlay, Check, Bookmark, FileText, MessageCircleMore, RotateCcw, Trash2, Book } from 'lucide-react'
import Reading from "@/assets/icons/Reading.svg"
import Reasoning from "@/assets/icons/Reasoning.svg"
import RIcon from "@/assets/icons/RIcon.svg"

const TableItem = ({ reading }) => {
    return (
        <div className='grid grid-cols-8 px-[10px] py-[12px] text-[#494949] dark:text-white border-t-[1px] border-[#D9DEE4]' >
            <div className='col-span-1' >Apr 25, 2023</div>
            <div className='col-span-1' >
                {
                    reading ?
                        <div className='flex items-center text-[#424551] dark:text-white gap-[8px]' >
                            <Image src={Reading} alt="reading" width={20} height={20} />
                            Reading
                        </div>
                        :
                        <div className='flex items-center text-[#424551] dark:text-white gap-[8px]' >
                            <Image src={Reasoning} alt="reasoning" width={20} height={20} />
                            Reasoning
                        </div>
                }
            </div>
            <div className='col-span-1' >LSAT 77 . 2</div>
            <div className='col-span-1' >12/25</div>
            <div className='col-span-1 flex gap-[4px] items-center' >20% <Progress value={20} className="bg-[#DDEDFF]" /></div>
            <div className='col-span-1' >02h 45m/35m</div>
            <div className='col-span-1 text-[11px] font-semibold' >
                {
                    reading ?
                        <div className='min-w-[99px] flex items-center justify-center dark:text-[#3A6E1F] text-[#3A6E1F] gap-[5px] border-[#B8EE81] w-fit py-[4px] rounded-[5.2px] border bg-[#D9F8BA]' >
                            Completed
                            <Check size={11} className='text-[#3A6E1F]' />
                        </div>
                        :
                        <div className='min-w-[99px] flex items-center justify-center dark:text-[#494949] gap-[5px] border-[#D9DEE4] w-fit py-[4px] rounded-[5.2px] border bg-[#ECEEF1]' >
                            Continue
                            <CirclePlay size={11} className='text-[#1877F2]' />
                        </div>
                }
            </div>
            <div className='col-span-1 flex items-center' >
                <div className='flex items-center gap-[9px]' >
                    <Image src={RIcon} alt="edit" width={16} height={16} />
                    <Bookmark size={16} className='text-[#494949] dark:text-white' />
                    <FileText size={16} className='text-[#494949] dark:text-white' />
                    <MessageCircleMore size={16} className='text-[#494949] dark:text-white' />
                    <div className='border-r border-[#D9DEE4] h-[16px] ' ></div>
                    <RotateCcw size={16} className='text-[#494949] dark:text-white' />
                    <Trash2 size={16} className='text-[#494949] dark:text-white' />
                </div>
            </div>
        </div>
    )
}

export default TableItem