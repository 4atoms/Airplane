
import {useState} from 'react';


  
const Flights=()=>
{const [data,setData]=useState([]);
    fetch('https://run.mocky.io/v3/519b5b96-0cdb-4502-b38e-8b9ce9db24c1')
  .then(response => response.json())
  .then(data =>{ let arr=JSON.stringify(data);
      setData(arr);
       console.log(data)});
    return(<>
        <div>This is homepage for flights</div>        
       <pre>{data}</pre>
</>   );
};
export default Flights;
