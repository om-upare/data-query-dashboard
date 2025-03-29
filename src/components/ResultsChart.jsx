import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ResultsChart = () => {
  const result = useSelector((state) => state.dashboard.result);

  if (!result) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <p className="text-gray-500">No results to display.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Results</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={result}>
          <XAxis dataKey="name" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip />
          <Bar dataKey="value" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
