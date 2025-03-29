import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { processQuery } from '../store';

const QueryHistory = () => {
  const history = useSelector((state) => state.dashboard.history);
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(processQuery(query));
  };

  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Query History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No previous queries.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((q, index) => (
            <li
              key={index}
              className="text-indigo-600 cursor-pointer hover:underline"
              onClick={() => handleHistoryClick(q)}
            >
              {q}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
