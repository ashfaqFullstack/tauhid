import Image from 'next/image';
import Button from './Button';
import { CircularProgress } from './CircleProgress';
import MeterBar from '@/assets/icons/MeterBar.svg'
import TimeStart from '@/assets/icons/time-start.svg'
import CenterProgress from '@/assets/icons/progress-img.svg'
import CirclePRogress from '@/assets/icons/circle-progress.svg'
const Progress = () => {
    return (
        <div className='border border-gray-200 rounded-[10px] p-[20px] ' >
            {/* Top buttons */}
            <div className='flex justify-between flex-wrap mb-[36px]' >
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


            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={13}
                    />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <CircularProgress
                        percentage={75}
                        title="Progress"
                        size={120}
                        bgColor=""
                        color="stroke-[#0866FF]"
                        strokeWidth={13}
                    />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <Image src={MeterBar} className="h-full mx-[37px]" alt="img" />
                </div>
                <div className="rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <Image src={TimeStart} className="" alt="img" />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <Image src={CenterProgress} className="h-full mx-[37px]" alt="img" />
                </div>
                <div className="border border-gray-200 rounded-[10px] w-full h-[150px] flex items-center justify-center">
                    <Image src={CirclePRogress} className="h-full mx-[37px]" alt="img" />
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
                <div className='border border-gray-200 rounded-[10px]  ' >
                    <Image src={MeterBar} className='h-full mx-[37px]' alt='img' />
                </div>

            </div> */}

        </div>
    )
}

export default Progress