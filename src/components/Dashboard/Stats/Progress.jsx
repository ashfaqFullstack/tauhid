import Image from 'next/image';
import Button from './Button';
import { CircularProgress } from './CircleProgress';
import MeterBar from '@/assets/icons/MeterBar.svg'
import TimeStart from '@/assets/icons/TimeBar.svg'
import CenterProgress from '@/assets/icons/progress-img.svg'
import CirclePRogress from '@/assets/icons/circle-progress.svg'
import { RCprogress } from './RCprogress';
const Progress = () => {
    return (
        <div className='border border-gray-200 rounded-[10px] p-[20px] ' >
            {/* Top buttons */}
            <div className='flex justify-between flex-wrap mb-[36px] gap-[20px]' >
                <div className='flex gap-[9px]' >
                    <Button Title="All" blue={true} />
                    <Button Title="1 Month" blue={false} />
                    <Button Title="15 Days" blue={false} />
                    <Button Title="1 Week" blue={false} />
                </div>
                <div className='flex gap-[9px]' >
                    <Button Title="Argument" blue={true} />
                    <Button Title="Reading" blue={false} />
                </div>
            </div>

            {/* Progress bars */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto">
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={9}
                    />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={9}
                    />
                </div>
                <div className="border border-gray-200 rounded-[10px] 2xl:px-[30px] py-[-30px] w-full h-full flex items-center justify-center">
                    <Image src={MeterBar} className="w-1/3 md:w-full p-[16px]" alt="img" />
                </div>
                <div className="rounded-[10px] w-full h-full  border  flex flex-col items-center justify-center">
                    <div className='text-center text-[26px] pt-[24px] font-semibold text-[#0866FF]' >2:45</div>
                    <Image src={TimeStart} className="w-1/3 md:w-full" alt="img" />
                </div>
                <div className="border border-gray-200 rounded-[10px] py-[10px] lg:py-0 flex items-center justify-center">
                    <RCprogress
                        percentage={65}
                        title="Progress"
                        size={140}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={10}
                    />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-full px-[10px] 2xl:px-[30px] py-[-30px] flex items-center justify-center">
                    <Image src={CirclePRogress} className="w-1/3 md:w-full mx-[10px]" alt="img" />
                </div>
            </div>



            {/* <div className='flex gap-[20px]' >
                <div className='border border-gray-200 rounded-[10px] py-[20px] px-[37px] ' >
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={13}
                    />
                </div>
                <div className='border border-gray-200 rounded-[10px] py-[20px] px-[37px] ' >
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={13}
                    />
                </div>
                <div className='border border-gray-200 rounded-[10px] p-[37px] ' >
                    <Image src={MeterBar} className='h-full' alt='img' />
                </div>

            </div> */}

        </div>
    )
}

export default Progress