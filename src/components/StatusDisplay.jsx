import React from 'react';
import { useSelector } from 'react-redux';

const StatusDisplay = () => {
  const { status, error } = useSelector((state) => state.dashboard);

  if (status === 'loading') {
    return (
      <p className="text-indigo-500 font-medium mb-4">
        Processing query, please wait...
      </p>
    );
  }

  if (status === 'failed') {
    return (
      <p className="text-red-500 font-medium mb-4">
        Error: {error}
      </p>
    );
  }

  return null;
};

export default StatusDisplay;
