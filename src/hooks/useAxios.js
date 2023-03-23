import React, {useState, useEffect} from "react";
import axios from "axios";

//we should implement a useLocalStorage here
const useLocalStorage = (key, initialValue = []) => {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }


const useAxios = (AxiosData, baseURL) => {
    //we can destructure the axios data and uselocalstorage
    const [getAxiosData, setGetAxiosData] = useLocalStorage(AxiosData);
    const getAPIData = async (formatter = data => data , 
        restOfUrL = "") => {
    const response = await axios.get(
      `${baseURL}${restOfUrL}`);
      setGetAxiosData(data => [
          ...data,
          formatter(response.data)
      ]);

  }
  //afterr that, we need to clear the API data
  const clearAPI = () => setGetAxiosData([]);
  
  return [getAxiosData, getAPIData, clearAPI];
}

export default useLocalStorage;
export  {useAxios, useLocalStorage} 