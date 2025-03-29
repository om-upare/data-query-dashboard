import React from 'react';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsChart from './components/ResultsChart';
import StatusDisplay from './components/StatusDisplay';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2 text-white">Gen AI Analytics Dashboard</h1>
          <p className="text-gray-300">Harness the power of AI for data insights</p>
        </header>

        {/* Query Input */}
        <QueryInput />

        {/* Status Display (Loading / Error) */}
        <StatusDisplay />

        {/* Query History */}
        <QueryHistory />

        {/* Results */}
        <ResultsChart />
      </div>
    </div>
  );
}

export default App;
