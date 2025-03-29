import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import Sections from '@/components/Dashboard/Calendar/Sections'
import StartNewSection from '@/components/Dashboard/Calendar/StartNewSection'
import Table from '@/components/Dashboard/Calendar/Table'

const page = () => {
    return (
        <div>
            <StartNewSection />
            <div className='flex items-center flex-wrap gap-[8px] my-[30px]' >
                <FilterItem dropdown={false} filter="Date & Time" />
                <FilterItem dropdown={true} filter="Amount" />
                <FilterItem dropdown={false} filter="Date & Time" />
                <FilterItem dropdown={false} filter="Date & Time" />
                <FilterItem dropdown={false} filter="Date & Time" />
                <div className='text-[#0866FF] text-[14px] font-semibold cursor-pointer hover:text-[#0831ff] px-[8px]' >
                    Clear Filter
                </div>
            </div>
            <div className='my-[30px] flex gap-[20px] overflow-x-auto' >
                <Sections />
            </div>
            <div className='overflow-x-auto ' >

                <Table />
            </div>
        </div>
    )
}

export default page