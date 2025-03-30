import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import Sections from '@/components/Dashboard/Calendar/Sections'
import Table from '@/components/Dashboard/Calendar/Table'
import HeaderDashboard from '@/components/Dashboard/Header/HeaderDashbaord'
import Progress from '@/components/Dashboard/Stats/Progress'
import StartSection from '@/components/Dashboard/Stats/StartSection'

const page = () => {
    return (
        <div>
            <HeaderDashboard Title={"Saad"} />
            <div className='relative' >
                <StartSection />
            </div>
            <div className='grid grid-cols-12 gap-[19px] mt-[30px]  ' >
                <div className='col-span-6 min-w-[631px] md:min-w-auto' >
                    <Progress />
                </div>
            </div>
            <div className='grid grid-cols-12 gap-[19px] mt-[30px]  ' >
                <div className='col-span-6 min-w-[631px] md:min-w-auto  p-[20px] border border-gray-200 rounded-[10px]' >
                    <div className='flex items-center overflow-x-auto gap-[8px] my-[30px]' >
                        <FilterItem dropdown={false} filter="Date" />
                        <FilterItem dropdown={true} filter="Amount" />
                        <FilterItem dropdown={false} filter="Currency" />
                        <FilterItem dropdown={false} filter="Status" />
                        <FilterItem dropdown={false} filter="Status" />
                    </div>
                    <div className='my-[30px] flex gap-[20px] overflow-x-auto' >
                        <Sections />
                    </div>
                    <div className='overflow-x-auto ' >

                        <Table />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page