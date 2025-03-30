import Image from 'next/image';
import Button from './Button';
import { CircularProgress } from './CircleProgress';
import MeterBar from '@/assets/icons/MeterBar.svg'


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


            <div className='flex gap-[20px]' >
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

            </div>

        </div>
    )
}

export default Progress