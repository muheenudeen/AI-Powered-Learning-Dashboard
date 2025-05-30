import React from "react";

interface ProgressBarProps {
  value: number; // percentage from 0 to 100
  className?: string;
}

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="bg-blue-600 h-2 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
