// import { Check, Cross } from "lucide-react";
// import Boxes from "./Boxes";

// const ServicesCards = ({ title }) => {
//     return (
//         <div>
//             <div className="shadow-medium mx-[31px] max-w-[412px] p-[40px] w-fit" >
//                 <div className="text-[#858FDD] text-[29px] font-[500]" >{title}</div>

//                 <div className="flex items-center mt-[28px] gap-[21px]" >
//                     <div className="text-[33px] bg-blue-100 rounded-full p-[29px] border border-[#0866FF]" >RC</div>
//                     <div className="flex flex-col " >
//                         <div className="text-[30px] font-semibold" >12/27</div>
//                         <div className="text-[#787878] text-[20px]" >45% Correct</div>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-[10px] mt-[36px]" >
//                     <div className="flex items-center gap-[10px] text-green-500 border-gray-200 rounded-full w-fit p-[6px]" >
//                         <div className="border border-green-500 rounded-full p-[10px]" >
//                             <Check className="text-green-500" />
//                         </div>
//                         12
//                     </div>
//                     <div className="flex p-[6px] items-center gap-[10px] text-red-500 border-gray-200 rounded-full w-fit" >
//                         <div className="border border-red-500 rounded-full p-[10px]" >
//                             <Cross className="text-red-500" />
//                         </div>
//                         12
//                     </div>
//                 </div>
//                 <Boxes />
//             </div>
//             {/* show this triangle which card is clicked  */}
//             <div className="w-0 ml-[32px] h-0 border-t-[110px] border-l-[210px] border-l-transparent border-r-[200px] border-r-transparent  border-t-[#EAFFFE]"></div>
//         </div>

//     )
// }
// export default ServicesCards;

import { Check, Cross } from "lucide-react";
import Boxes from "./Boxes";
import { useState } from "react";

const ServicesCards = ({ title, id, activeCard, setActiveCard }) => {
    const isActive = activeCard === id;

    const handleCardClick = () => {
        setActiveCard(id);
    };

    return (
        <div className="mx-[12px]" >
            <div
                className={`border dark:bg-gray-900 border-gray-200 transition-all min-w-[412px] p-[40px] w-fit cursor-pointer  duration-100 ${isActive ? 'bg-[#EAFFFE] border-b-0' : 'bg-white'}`}
                onClick={handleCardClick}
            >
                <div className="text-[#858FDD] text-[29px] font-[500]">{title}</div>

                <div className="flex items-center mt-[28px] gap-[21px]">
                    <div className="text-[33px] bg-blue-100 dark:text-black rounded-full p-[29px] border border-[#0866FF]">RC</div>
                    <div className="flex flex-col">
                        <div className="text-[30px] dark:text-white font-semibold">12/27</div>
                        <div className="text-[#787878] text-[20px]">45% Correct</div>
                    </div>
                </div>

                <div className="flex items-center gap-[10px] mt-[36px]">
                    <div className="flex items-center gap-[10px] text-green-500 border-gray-200 rounded-full w-fit p-[6px]">
                        <div className="border border-green-500 rounded-full p-[10px]">
                            <Check className="text-green-500" />
                        </div>
                        12
                    </div>
                    <div className="flex p-[6px] items-center gap-[10px] text-red-500 border-gray-200 rounded-full w-fit">
                        <div className="border border-red-500 rounded-full p-[10px]">
                            <Cross className="text-red-500" />
                        </div>
                        12
                    </div>
                </div>
                <Boxes />
            </div>

            {/* Show triangle only for the active card */}
            {isActive && (
                <div className="w-0  h-0 border-l-[210px] border-l-transparent border-r-[200px] border-r-transparent border-t-[110px] border-t-[#EAFFFE] dark:border-t-gray-900 "></div>
            )}
        </div>
    );
};

export default ServicesCards;
