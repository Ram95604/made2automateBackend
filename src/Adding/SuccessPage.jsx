// SuccessPage.jsx
import React from 'react';
import ProductDetailsPage from './ProductDeatils';
import { useLocation } from 'react-router-dom';
const SuccessPage = () => {
  const location=useLocation();
  const { state } = location;

  console.log('state:',state);

  return (
    <div>
      {/* Pass savedData to ProductDetailsPage */}
      {state?.savedData && <ProductDetailsPage savedProduct={state.savedData} />}
    </div>
  );
};

export default SuccessPage;
