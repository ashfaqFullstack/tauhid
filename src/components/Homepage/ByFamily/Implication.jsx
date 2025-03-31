import React from 'react'
import Bar from './Bar'

const Implication = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between mt-[40px] ">
                <p className="text-xl font-bold pr-[40px]">Implications</p>
                <Bar />
            </div>
            <div className="flex items-start md:items-center flex-col md:flex-row  justify-between my-[10px]">
                <p className="text-[24px] md:w-[200px] text-start font-normal ml-[40px]">Medium</p>
                <div className="pl-[20px] w-full" >
                    <Bar />
                </div>
            </div>
            <div className="flex items-start md:items-center flex-col md:flex-row  justify-between my-[10px]">
                <p className="text-[24px] md:w-[200px] text-start font-normal ml-[40px]">Low</p>
                <div className="pl-[20px] w-full" >
                    <Bar />
                </div>
            </div>
            <div className="flex items-start md:items-center flex-col md:flex-row  justify-between my-[10px]">
                <p className="text-[24px] md:w-[200px] text-start font-normal ml-[40px]">Medium</p>
                <div className="pl-[20px] w-full" >
                    <Bar />
                </div>
            </div>
            <div className="flex items-start md:items-center flex-col md:flex-row  justify-between my-[10px]">
                <p className="text-[24px] md:w-[200px] text-start font-normal ml-[40px]">Low</p>
                <div className="pl-[20px] w-full" >
                    <Bar />
                </div>
            </div>
        </div>
    )
}

export default Implication