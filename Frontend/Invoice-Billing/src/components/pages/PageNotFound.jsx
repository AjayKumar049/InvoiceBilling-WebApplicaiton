import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="p-6 w-fit mx-auto mt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The requested page does not exist</p>
      <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" to="/">Go back to home</Link>
    </div>
  );
};

export default PageNotFound;
