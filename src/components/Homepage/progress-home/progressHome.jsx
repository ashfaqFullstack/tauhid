"use client"
import { Progress } from "@/components/ui/progress";
import * as React from "react";

const ProgressHome = ({ progress }) => {
    // Determine background color based on progress
    const getProgressBarColor = (value) => {
        if (value >= 60) {
            return "bg-green-500";  // Green for high progress
        } else if (value >= 10) {
            return "bg-red-300"; // Red for medium progress
        } else {
            return "bg-gray-300";    // Gray for low progress
        }
    };

    return (
        <div className="relative w-full">
            <Progress 
                value={progress} 
                color={getProgressBarColor(progress)} // Pass dynamic color
                className="h-[30px] bg-none" // Background of the progress bar (light gray)
            />
            {/* Percentage displayed at the end of the progress bar */}
            <div className="absolute top-0 right-0 h-[30px] flex items-center pr-2">
                <span className="text-black font-semibold">{progress}%</span>
            </div>
        </div>
    );
}

export default ProgressHome;
