import { useState } from "react";

const Home = ()=>{

  const [formData,setformData] = useState({
    fname:"",
    lname:""
  })
    
  const fNmaeHandler = (e) =>{
    const value = e.target.value;
    setformData({
        ...formData,
        fname:value
    })    
  }
  const lNmaeHandler = (e) =>{
    const value = e.target.value;
    setformData({
        ...formData,
        lname:value
    })    
  }


    return(
        <>
        <h2>
        {formData.fname} {formData.lname}
        </h2>
        <form >
        <h2 style={{marginBottom:"50px"}}>Contact Us</h2>
        <label for="">First Name</label>
        <br/>
        <input type="text" onChange={(e)=>fNmaeHandler(e)} name="fname" value={formData.fname}/>
        <br/>

        <label for="">Last Name</label>
        <br/>
        <input type="text" onChange={(e)=>lNmaeHandler(e)} name="lname" value={formData.lname}/>

        </form>
</>    
)
}

export default Home;