import React from 'react';

type Props = {
  progress: number; // progress as a percentage (0 to 100)
};

const CircularProgress = ({ progress }: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="h-36 w-36">
        <svg className="absolute inset-0 w-full h-full">
          <circle
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            r="46"
            cx="50%"
            cy="50%"
          />
          <circle
            className="text-blue-500"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            r="46"
            cx="50%"
            cy="50%"
            strokeDasharray="289.027px"
            strokeDashoffset={`${289.027 - (289.027 * progress) / 100}px`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-500">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
