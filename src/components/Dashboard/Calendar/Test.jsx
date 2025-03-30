import TestItem from './TestItem'

const Tests = () => {
    return (
        <div className='my-[30px] min-w-[1200px] ' >
            {/* table headings  */}
            <div className='grid grid-cols-12 px-[10px]  py-[12px] text-[#494949] dark:text-white font-semibold border-y-[1px] border-[#D9DEE4]' >
                <div className='col-span-1' >Date</div>
                <div className='col-span-1' >LSAT</div>
                <div className='col-span-1' >Score</div>
                <div className='col-span-2' >Total Accuracy</div>
                <div className='col-span-1' >Sec1</div>
                <div className='col-span-1' >Sec2</div>
                <div className='col-span-1' >Sec3</div>
                <div className='col-span-1' >Sec4</div>
                <div className='col-span-1' >Time</div>
                <div className='col-span-1' >Status</div>
                <div className='col-span-1' >Actions</div>
            </div>

            {/* Table items  */}
            <div className='relative' >

                <div className=' !max-h-[496px] overflow-y-auto' >
                    <TestItem reading={false} />
                    <TestItem reading={true} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                    <TestItem reading={false} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 dark:from-gray-800 to-transparent pointer-events-none"></div>
            </div>

            <div className='px-[40px] py-[22px] flex items-center justify-between ' >
                <div className='text-[#787878] dark:text-white' >Viewing 1-20 of 90 results</div>
                <div className='flex items-center gap-[13px]' >
                    <div className='border border-[#D9DEE4] cursor-pointer text-[#D9DEE4] dark:border-[#787878] dark:text-[#787878] rounded-[7px] p-[10px]' >Previous</div>
                    <div className='border border-[#787878] cursor-pointer text-black dark:text-white dark:border-white rounded-[7px] p-[10px]'>Next</div>
                </div>
            </div>

        </div>
    )
}

export default Tests