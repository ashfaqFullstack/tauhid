import Image from "next/image";
import FlaggedProgress from '@/assets/icons/flgeedprogress.svg';
import flaggedCircle from '@/assets/icons/flaggedCircle.svg';

const FlaggedQuestions = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left Column */}
                <div className="w-full">
                    <h1 className="font-semibold text-4xl mb-2">Flagged Questions</h1>
                    <div className="border-b border-black"></div>
                    <div className="mt-7 flex gap-4 items-center">
                        <div className="w-[20px] h-[20px] bg-green-500 rounded-full"></div>
                        <p>Correct</p>
                        <div className="w-[20px] h-[20px] bg-gray-400 rounded-full"></div>
                        <p>Inappropriate</p>
                        <div className="w-[20px] h-[20px] bg-red-600 rounded-full"></div>
                        <p>Incorrect</p>
                    </div>
                    <Image src={FlaggedProgress} alt="" className="mt-7" />
                </div>

                {/* Right Column */}
                <div className="w-full">
                    <h1 className="font-semibold text-4xl mb-2">Flagged Questions</h1>
                    <div className="border-b border-black"></div>
                    <div className="mt-7 flex gap-4 items-center">
                        <div className="w-[20px] h-[20px] bg-green-500 rounded-full"></div>
                        <p>Correct</p>
                        <div className="w-[20px] h-[20px] bg-gray-400 rounded-full"></div>
                        <p>Inappropriate</p>
                        <div className="w-[20px] h-[20px] bg-red-600 rounded-full"></div>
                        <p>Incorrect</p>
                    </div>
                    <div className="flex justify-center">
                        <Image src={flaggedCircle} alt="" className="mt-7" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlaggedQuestions;
