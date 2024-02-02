//import './App.test';
import {useEffect, useState} from 'react';
//import {} from 'react-router-dom';

function App() {

  const [data,setData] = useState([])
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[mobile,setMobile] = useState("")

  function saveUser(){
    console.warn({name,email,mobile})
    let data={name,email,mobile}
    fetch("http://localhost:4000/post",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application.json'
      },
      body:JSON.stringfy(data)
    }).then((result)=>{
      //console.warn("result",result
      result.json().then((resp)=>{
        console.log("resp")
      })
      })
  }

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
    <div className='primary'>
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
        <br />
        <h2>Fill to edit.</h2>
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' /><br />
        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/> <br />
        <input type="text" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder='mobile'/>
        <button onClick={saveUser} >Submit</button>
    </div>
   
  )
    
  
}

export default App;