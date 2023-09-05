import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function GenderPieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data
    const data = {
      labels: ['Male', 'Female'],
      datasets: [{
        data: [30, 70],
        backgroundColor: ['#FF5B84', '#1198F6'],
      }],
    };

    // Create the pie chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'left',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              textAlign: 'center',
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="shadowDiv rounded-md py-3 px-4 xl:px-7 fontMonst w-full md:w-[30%] ">
      <h1 className="text-[18px] font-[700]">Followed by Gender</h1>
      <div className="w-full">
      <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default GenderPieChart;
