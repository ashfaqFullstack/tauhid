import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import { CirclePlay, Check, Bookmark, FileText, MessageCircleMore, RotateCcw, Trash2, Book } from 'lucide-react'
import Reading from "@/assets/icons/Reading.svg"
import Reasoning from "@/assets/icons/Reasoning.svg"
import RIcon from "@/assets/icons/RIcon.svg"
import Flag from "@/assets/icons/flag.svg"
import QuestionButton from '@/components/Buttons/QuestionButton'

const QuestionItem = ({ reading, status }) => {
    const safeValue = 3;
    return (
        <div className='grid grid-cols-12 px-[10px] py-[12px] text-[#494949] dark:text-white border-t-[1px] border-[#D9DEE4]' >
            <div className='col-span-3 flex items-center gap-[4px]' >
                Lorem ipsum Title Sample
                {status == 'Correct' && <QuestionButton title={status} text="#3A6E1F" bgColor="#D9F8BA" border="#B8EE81" />}
                {status == 'Missed' && <QuestionButton title={status} text="#B12B40" bgColor="#FAEAEE" border="#F5D5DC" />}
                {status == 'Skipped' && <QuestionButton title={status} text="#5B6170" bgColor="#ECEEF1" border="#D9DEE4" />}
            </div>
            <div className='col-span-1 flex items-center gap-[4px]' >
                Q13 77.2
                {
                    !reading &&
                    <Image src={Flag} alt="Flag" width={16} height={16} />
                }
            </div>
            <div className='col-span-2' >
                {
                    reading ?
                        <div className='flex items-center text-[#424551] dark:text-white gap-[8px]' >
                            <Image src={Reading} alt="reading" width={20} height={20} />
                            50/70
                        </div>
                        :
                        <div className='flex items-center text-[#424551] dark:text-white gap-[8px]' >
                            <Image src={Reasoning} alt="reasoning" width={20} height={20} />
                            lorem - ipsum
                        </div>
                }
            </div>
            <div className="flex items-center gap-[2px] col-span-1">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full border border-black ${index < safeValue ? 'bg-black dark:bg-white' : 'bg-transparent'
                            }`}
                        aria-label={`Circle ${index + 1}${index < safeValue ? ' (filled)' : ''}`}
                    />
                ))}
            </div>
            <div className='col-span-2 flex items-center gap-[8px]' >
                <QuestionButton title="Lorem" text="#5B6170" bgColor="#ECEEF1" border="#D9DEE4" />
                <QuestionButton title="ipsum" text="#5B6170" bgColor="#ECEEF1" border="#D9DEE4" />
            </div>
            <div className='col-span-1' >02h 45m/35m</div>
            <div className='col-span-1' >Apr 25, 2023</div>
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

export default QuestionItem