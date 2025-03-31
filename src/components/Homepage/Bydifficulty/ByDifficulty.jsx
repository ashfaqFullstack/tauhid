import progressDiffculty from '@/assets/icons/dificulty-progress.svg';
import Image from 'next/image';

const ByDifficulty = () => {
    return (
        <>
            <div>
                <h1 className="font-semibold text-4xl dark:text-white">By Difficulty</h1>
                <div className="border-b border-black dark:border-white mt-4"></div>

                <div className="mt-7 space-y-4">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <button className="border w-fit mb-[10px] md:mb-0 border-red-400 rounded-md px-8 py-3 text-red-600 font-normal">High</button>
                        <Image src={progressDiffculty} alt='' className='' />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <button className="border w-fit mb-[10px] md:mb-0 border-yellow-400 rounded-md px-8 py-3 text-yellow-600 font-normal">Medium</button>
                        <Image src={progressDiffculty} alt='' className='' />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <button className="border w-fit mb-[10px] md:mb-0 border-green-400 rounded-md px-8 py-3 text-green-600 font-normal">Low</button>
                        <Image src={progressDiffculty} alt='' className='' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ByDifficulty;