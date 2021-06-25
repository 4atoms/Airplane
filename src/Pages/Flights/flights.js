
import {useState} from 'react';
import { FHeader } from './flights.style';
import Navbar from '../Homepage/Navbar/Navbar';


const Flights=()=>
  {
    const [data,setData]=useState([]);
    // fetch('https://run.mocky.io/v3/519b5b96-0cdb-4502-b38e-8b9ce9db24c1')
    fetch("https://run.mocky.io/v3/782a2a9c-cbbc-4995-b304-a41303a58121")
    .then(response => response.json())
    .then(data =>{ let arr=JSON.stringify(data);
      setData(arr);
      console.log(data)});
    return(
    <>
      <Navbar/>
      {/* <div>This is homepage for flights</div>   */}
      <FHeader>
        Flights      
      </FHeader>
      <pre>{data}</pre>
    </> 
    );
  };
export default Flights;
