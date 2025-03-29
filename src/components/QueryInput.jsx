import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { processQuery } from '../store';

const QueryInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const suggestions = ['Sales report', 'User engagement', 'Revenue by region', 'Customer feedback'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(processQuery(input));
      setInput('');
    }
  };

  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-medium mb-2">Enter your query:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Sales report for Q1"
          className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:border-indigo-500 text-black"
          list="suggestions"
        />
        <datalist id="suggestions">
          {suggestions.map((s, index) => (
            <option key={index} value={s} />
          ))}
        </datalist>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
