import React, { useState } from 'react';
import { Dialog, Box, TextField, Button, styled } from '@mui/material';
import { authenticateSubmit } from '../service/api';
import { useNavigate } from 'react-router-dom';
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #ffffff url(https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1) center 50% no-repeat;
  height: 83%;
  background-size: contain;
  width: 40%;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const SubmitButton = styled(Button)`
  text-transform: none;
  background: #f81641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const signupInitialValues = {
  productId: '',
  productName: '',
  manufactName: '',
  descr: '',
  qty: ''
  
};

const AddDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(null);
  const [signup, setSignup] = useState(signupInitialValues);
  const [successMessage, setSuccessMessage] = useState(''); // Add this line
  const [savedData, setSavedData] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProductImage(e.target.result); // Stores base64-encoded image data
    };
    reader.readAsDataURL(selectedFile);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };  

const handleSubmit = async () => {
  try {
    let response=await authenticateSubmit(signup, productImage);
    console.log('Response:', response.data);
    setSuccessMessage('Data added successfully');
    setSavedData(response.data);
    navigate('/success', { state: { savedData: response.data } });
  } catch (error) {
    if(error.response){
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    else if(error.request){
      console.log(error.request);
    }
    else{

      console.error('Error:', error.message);
    }
    console.log(error.config);
  }
  handleClose();
};
  
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image />
          <Wrapper>
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="productId" label="Product ID" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="productName" label="Product Name" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="manufactName" label="Manufacturer Name" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="descr" label="Description" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="qty" label="Quantity" />
            
            <SubmitButton variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </SubmitButton>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default AddDialog;
