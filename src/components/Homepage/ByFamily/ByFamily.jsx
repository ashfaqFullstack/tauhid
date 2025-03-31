import Image from "next/image";
import progressDiffculty from '@/assets/icons/dificulty-progress.svg';
import FamilyProgress from "@/assets/icons/family-progress.svg"

const ByFamily = () => {
    return (
        <div>
            <h1 className="font-semibold text-4xl dark:text-white">By Family</h1>
            <div className="border-b border-black dark:border-white mt-4"></div>
            <div className="flex flex-col md:flex-row justify-between mt-7">
                <p className="text-xl font-bold">Implications</p>
                <Image src={progressDiffculty} alt="" />
            </div>
            <div className="flex  flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex  flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Low</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-7">
                <p className="text-xl font-bold">Implications</p>
                <Image src={progressDiffculty} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Low</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-7">
                <p className="text-xl font-bold">Implications</p>
                <Image src={progressDiffculty} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right items-end justify-start md:justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Low</p>
                <Image src={FamilyProgress} alt="" />
            </div>
            <div className="flex flex-col md:flex-row  justify-between mt-2">
                <p className="text-md font-normal text-right align-end justify-end">Medium</p>
                <Image src={FamilyProgress} alt="" />
            </div>

        </div>
    )
}
export default ByFamily;