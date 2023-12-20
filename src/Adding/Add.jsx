import React, { useState } from 'react';
import AddDialog from './AddDialog';
import ScanBar from './ScanBar';

const Add = () => {
  const [open, setOpen] = useState(false);
  const [scanBarcode, setScanBarcode] = useState(false); 

  const openDialog = () => {
    setOpen(true);
  };

  const handleScanBarcode = () => {
    setScanBarcode(true); 
  };

  return (
    <div className='happy'>
      <div>
        <div>
          <button className="button-64" role="button" style={{ marginBottom: "15px", marginLeft: "5px" }} onClick={handleScanBarcode } >
            <span className="text">Scan Bar</span>
          </button>
        </div>
        {/* Button to open the AddDialog */}
        <button className='glowing-btn' onClick={openDialog}>
          <span className='glowing-txt'>
            A<span className='faulty-letter'>D</span>D
          </span>
        </button>

        <AddDialog open={open} setOpen={setOpen} />

        {scanBarcode && <ScanBar />}
      </div>
    </div>
  );
};

export default Add;
