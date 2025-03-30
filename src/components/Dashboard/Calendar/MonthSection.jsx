import Image from "next/image"
import Button from "../Stats/Button"
import WatchButtons from "@/assets/icons/watch-button.svg"
const MonthSection = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 ">
                    <h1 className="font-bold text-2xl">November</h1>
                    <p className="font-medium text-2xl">2023</p>
                </div>
                <div>____________________________________________</div>
                <div className='flex justify-between flex-wrap' >
                    <div className='flex gap-[9px]' >
                        <Button Title="Today" blue={true} />
                        <Button Title="Bookmarked" blue={false} />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-10">
                <div className="flex flex-col rounded-full bg-[#FF3B30] text-white w-[160px] h-[130px] items-center justify-center text-center">
                    <p className="text-4xl">WED</p>
                    <p className="text-4xl">10</p>
                </div>
                <div className=" w-full border p-4 rounded-lg space-y-4">
                    <div className="flex justify-between ">
                        <div className="flex-col">
                            <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                            <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                            <p className="text-sm font-normal">Duration: 1 hour</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-normal">Section</p>
                            <button className="bg-black text-white rounded-md px-4 py-1">LR</button>
                        </div>
                        <div>
                            <Image src={WatchButtons} />
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="flex justify-between">
                        <div className="flex-col">
                            <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                            <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                            <p className="text-sm font-normal">Duration: 1 hour</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-normal">Section</p>
                            <button className="bg-black text-white rounded-md px-4 py-1">LR</button>
                        </div>
                        <div>
                            <Image src={WatchButtons} />
                        </div>
                    </div>

                </div>
            </div>
            <div
                className="flex gap-4 mt-10">
                <div className="flex flex-col rounded-lg border  p-6 items-center justify-center text-center">
                    <p className="text-4xl text-orange-600">WED</p>
                    <p className="text-4xl text-black">12</p>
                </div>
                <div className="border w-full flex p-4 justify-between rounded-lg">
                    <div className="flex-col">
                        <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                        <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                        <p className="text-sm font-normal">Duration: 1 hour</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm font-normal">Section</p>
                        <button className="bg-black text-white rounded-md px-4 py-1">LR</button>
                    </div>
                    <div>
                        <Image src={WatchButtons} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MonthSection