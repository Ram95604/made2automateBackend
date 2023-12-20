import axios from 'axios';

const URL='http://localhost:9000';
export const authenticateSubmit = async (data) => {
    try {
     
      return  await axios.post(`${URL}/signup`, data);
  
     
    } catch (error) {
      console.log('Error in calling submit api', error);
    }
  };
  