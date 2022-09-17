import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f5e21c0b24msh1901eed2c853ad3p19292ajsn42eb798394e0' ,
    },
  });
    
  return data;
}