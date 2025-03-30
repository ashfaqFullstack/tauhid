import React from 'react'
import QuestionItem from './QuetionItem'

const Question = () => {
    return (
        <div className='my-[30px] min-w-[1200px]' >
            <div className='grid grid-cols-12 px-[10px]  py-[12px] text-[#494949] dark:text-white font-semibold border-y-[1px] border-[#D9DEE4]' >
                <div className='col-span-3' >Title</div>
                <div className='col-span-1' >Question</div>
                <div className='col-span-2' >Type - Subtype</div>
                <div className='col-span-1' >Difficulty</div>
                <div className='col-span-2' >Tags</div>
                <div className='col-span-1' >Timing</div>
                <div className='col-span-1' >Date</div>
                <div className='col-span-1' >Actions</div>
            </div>

            <div className='relative' >

                <div className=' !max-h-[496px] overflow-y-auto' >
                    <QuestionItem reading={false} status="Correct" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Missed" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
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

export default Question