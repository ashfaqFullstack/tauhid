"use client"
import { Progress } from "@/components/ui/progress";
import * as React from "react";

const ProgressHome = ({ progress, color }) => {

    return (
        <div className="relative w-full">
            <Progress
                value={progress}
                color={color}
                className="h-[30px] bg-none"
            />

            <div className="absolute top-0 right-0 h-[30px] flex items-center pr-2">
                <span className="text-black dark:text-white  font-semibold">{progress}%</span>
            </div>
        </div>
    );
}

export default ProgressHome;
