import React from 'react';

const LineGraph = () => {
  const data = [
    { day: 'Mon', lastWeek: 50, thisWeek: 75 },
    { day: 'Tue', lastWeek: 70, thisWeek: 85 },
    { day: 'Wed', lastWeek: 40, thisWeek: 65 },
    { day: 'Thu', lastWeek: 60, thisWeek: 95 },
    { day: 'Fri', lastWeek: 80, thisWeek: 55 },
    { day: 'Sat', lastWeek: 90, thisWeek: 45 },
  ];

  return (
        <div className="relative w-full h-52">
          {/* Y-axis */}
          <div className="absolute top-0 bottom-0 left-0 w-10 flex flex-col justify-between">
            <div className="h-20">100</div>
            <div className="h-20">75</div>
            <div className="h-20">50</div>
            <div className="h-20">25</div>
            <div className="h-20">0</div>
          </div>
          {/* X-axis */}
          <div className="absolute bottom-0 left-10 right-0 flex justify-between">
            {data.map((item) => (
              <div key={item.day} className="w-1/6 text-center">{item.day}</div>
            ))}
          </div>
          {/* Graph */}
          <svg className="absolute top-0 bottom-0 inset-x-0 h-[">
            {/* Previous Week line */}
            <polyline
              points="100 44 80 33 43 55"
              fill="none"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="2"
            />
            {/* This Week line */}
            <polyline
              points={data.map((item, index) => `${index * 40},${100 - item.thisWeek}`).join(' ')}
              fill="none"
              stroke="rgba(55, 65, 81, 0.5)"
              strokeWidth="2"
            />
          </svg>
        </div>
  );
};

export default LineGraph;
