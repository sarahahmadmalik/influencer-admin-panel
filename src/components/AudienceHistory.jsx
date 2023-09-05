import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function AudienceHistory() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart data
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Total Views',
          data: [15000, 22000, 18000, 25000, 21000, 28000],
          borderColor: '#FF5B84',
          borderWidth: 2,
          pointRadius: 0, // Hide points on the line
          fill: {
            target: 'origin',
            above: 'rgba(255, 91, 132, 0.6)', // Gradient color above the line
            below: 'rgba(217, 217, 217, 0)', // Transparent color below the line
          },
        },
      ],
    };

    // Chart options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false, 
        },
        y: {
          display: false, 
        },
      },
      plugins: {
        legend: {
          display: false, 
        },
        tooltip: {
          enabled: false, // Hide tooltips
        },
      },
      elements: {
        line: {
          fill: false, // Remove background fill
        },
      },
      legend: {
        display: false, // Hide the legend (added directly to the options)
      },
    };

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="shadowDiv rounded-md py-3 px-4 lg:px-7 fontMonst lg:w-[30%]">
      <h1 className="text-[18px] font-[700]">Audience History</h1>
      <div className="w-full">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default AudienceHistory;
