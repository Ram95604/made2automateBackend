import React from 'react';

const ProductDetailsPage = ({ savedProduct }) => {
  console.log('savedProduct:', savedProduct);

  const handleDownloadBarcode = () => {
    console.log('Trying to download barcode...');

    if (!savedProduct) {
      console.error('savedProduct is undefined.');
      return;
    }

    console.log('savedProduct exists.');

    if (!savedProduct.data || !savedProduct.data.barcode) {
      console.error('Barcode data is undefined or null.');
      return;
    }

    console.log('Barcode data exists.');

    const blob = new Blob([savedProduct.data.barcode], { type: 'image/png' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'barcode.png';

    
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Data Received and Saved Successfully</h2>
      
      {savedProduct.data && (
        <div>
          <p>Product ID: {savedProduct.data.productId}</p>
          <p>Product Name: {savedProduct.data.productName}</p>
          
          {savedProduct.data.barcode && (
            <img src={`data:image/png;base64,${savedProduct.data.barcode.toString('base64')}`} alt="Barcode" />
          )}
        </div>
      )}
      
      <button onClick={handleDownloadBarcode}>Download Barcode</button>
    </div>
  );
};

export default ProductDetailsPage;
