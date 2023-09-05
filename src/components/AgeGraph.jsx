import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function AgeGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Dummy data for the horizontal bar chart
    const data = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          data: [25, 40, 60, 30, 50], // Dummy data values
          backgroundColor: '#1198F6', // Background color for all bars
        },
      ],
    };

    // Create the horizontal bar chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: {
        legend:{
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true, // Start the x-axis at zero
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });
  }, []);

  return (
    <div className="shadowDiv rounded-md py-3 xl:px-7 px-4 fontMonst w-full md:w-[30%] ">
      <h1 className="text-[18px] font-[700]">Followed by Age</h1>
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default AgeGraph;
