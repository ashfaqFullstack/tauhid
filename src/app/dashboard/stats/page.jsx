import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import MonthSection from '@/components/Dashboard/Calendar/MonthSection'
import Sections from '@/components/Dashboard/Calendar/Sections'
import Table from '@/components/Dashboard/Calendar/Table'
import HeaderDashboard from '@/components/Dashboard/Header/HeaderDashbaord'
import { ChartProgress } from '@/components/Dashboard/Stats/chart-prgress'
import Progress from '@/components/Dashboard/Stats/Progress'
import StartSection from '@/components/Dashboard/Stats/StartSection'

const page = () => {
    return (
        <div>
            <HeaderDashboard Title={"Saad"} />
            <div className='relative' >
                <StartSection />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-[19px] mt-[30px]'>
                <div className=' col-span-12 sm:col-span-6 min-w-[631px] md:min-w-auto'>
                    <ChartProgress />
                </div>
                <div className='col-span-12 sm:col-span-6 min-w-[631px] md:min-w-auto'>
                    <Progress />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[19px] mt-[30px]">
                <div className="p-[20px] border border-gray-200 rounded-[10px]">
                    <div className="flex items-center overflow-x-auto gap-[8px] my-[30px]">
                        <FilterItem dropdown={false} filter="Date" />
                        <FilterItem dropdown={true} filter="Amount" />
                        <FilterItem dropdown={false} filter="Currency" />
                        <FilterItem dropdown={false} filter="Status" />
                        <FilterItem dropdown={false} filter="Status" />
                    </div>
                    <div className="my-[30px] flex gap-[20px] overflow-x-auto">
                        <Sections />
                    </div>
                    <div className="overflow-x-auto">
                        <Table />
                    </div>
                </div>

                {/* Second Section with MonthSection */}
                <div className="p-[20px] border border-gray-200 rounded-[10px]">
                    <MonthSection />
                </div>
            </div>

        </div>
    )
}

export default page