//import './App.test';
import {useEffect, useState} from 'react';
//import {} from 'react-router-dom';

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/post").then((result)=>
  {result.json().then((resp)=>{
    //console.warn("result",resp)
    setData(resp)
  })
  }) 
},[])
console.warn(data)
  return(
    <div>
       <h1>React API</h1>
        <table border="1px">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
          </tr>
        
        {
          data.map((item)=>
          
          <tr>
            <td>{item.userId}</td>
            <td>{item.name} </td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        
          )
        }
        </table>
    </div>
   
  )
    
  
}

export default App;