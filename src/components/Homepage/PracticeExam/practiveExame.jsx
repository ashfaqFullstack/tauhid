import { CircularProgress } from "@/components/Dashboard/Stats/CircleProgress";
import ProgressHome from "../progress-home/progressHome";
import Image from "next/image";
import scoreDistribution from '@/assets/icons/score-distribute.svg'
const PracticeExame = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-start gap-6">
                <div className="w-full sm:w-auto">
                    <h1 className="font-semibold text-4xl">Practice Exam 1 (Dec 2014)</h1>
                </div>
                <div className="flex-col justify-end text-right items-end w-full sm:w-auto">
                    <p className="text-blue-500 font-normal text-lg">View Answers & Explanation</p>
                    <p className="text-gray-400 font-normal text-md">Completed 23 days ago at 3:54pm ET on 4/15/21</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="mt-10 flex flex-wrap  gap-10">
                {/* Circular Progress Section */}
                <div className="flex justify-center items-center w-full sm:w-[170px] h-[170px]">
                    <div className="rounded-[10px] w-full sm:w-[170px] h-[170px] flex items-center justify-center">
                        <CircularProgress
                            percentage={75}
                            title="Progress"
                            size={170}
                            bgColor=""
                            color="stroke-[#0866FF]"
                            strokeWidth={13}
                        />
                    </div>
                </div>

                {/* Progress Bars and Information */}
                <div className="w-full sm:w-[calc(50%-10px)] flex flex-col gap-6">
                    <div className="flex justify-between w-full gap-5">
                        <p className="flex gap-2">Correct <span className="font-bold text-lg">75</span></p>
                        <ProgressHome progress={75} />
                    </div>
                    <div className="flex justify-between w-full gap-5">
                        <p className="flex gap-2">Correct <span className="font-bold text-lg">75</span></p>
                        <ProgressHome progress={20} />
                    </div>
                    <div className="flex justify-between w-full gap-5">
                        <p className="flex gap-2">Correct <span className="font-bold text-lg">75</span></p>
                        <ProgressHome progress={9} />
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <Image src={scoreDistribution} alt="" className="w-full" />
            </div>

        </div>
    );
}

export default PracticeExame;
