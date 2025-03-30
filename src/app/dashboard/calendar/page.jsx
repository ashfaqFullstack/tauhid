import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import Sections from '@/components/Dashboard/Calendar/Sections'
import StartNewSection from '@/components/Dashboard/Calendar/StartNewSection'
import Table from '@/components/Dashboard/Calendar/Table'
import Header from "@/components/Dashboard/Header/Header";


const page = () => {
    return (
        <div>
            <Header Title="Saad" />
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
                <div className='px-[40px] py-[22px] flex items-center justify-between ' >
                    <div className='text-[#787878] dark:text-white' >Viewing 1-20 of 90 results</div>
                    <div className='flex items-center gap-[13px]' >
                        <div className='border border-[#D9DEE4] cursor-pointer text-[#D9DEE4] dark:border-[#787878] dark:text-[#787878] rounded-[7px] p-[10px]' >Previous</div>
                        <div className='border border-[#787878] cursor-pointer text-black dark:text-white dark:border-white rounded-[7px] p-[10px]'>Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page