import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = ()=>{

    const navigate = useNavigate();


    const[formData,setFormData] = useState({
        book_name:"",
        author_name:"",
        price:null
    })
    const[loader,setLoader]=useState(false);

    const API_URL = "https://6743071fb7464b1c2a635cd3.mockapi.io/api/books";


 

const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
        ...formData,
        [name]:value
    })
}



const handleSubmit = async (e) =>{
    setLoader(true);
    e.preventDefault();
    try {
        const response = await axios.post(API_URL,formData);
        const{status}=response;
        if (status === 201) {
            setLoader(false);
            navigate('/books')
        }
    } catch (error) {
        setLoader(false);
        console.log(error);
    }
    
}


    return(
        <>
        <h2>
        </h2>
        <form onSubmit={handleSubmit}>
        <h2 style={{marginBottom:"50px"}}>Contact Us</h2>
        <label for="">Book Name</label>
        <br/>
        <input onChange={handleInputChange} type="text"  name="book_name" />
        <br/>
        <label for="">author name</label>
        <br/>
        <input onChange={handleInputChange}  type="text"  name="author_name" />
        <br/>
        <label for="">Price</label>
        <br/>
        <input onChange={handleInputChange}  type="text"  name="price" />
        <br/>
        <input type="submit" value={loader ? "submiting...." : "submit"} disabled={loader ? "disabled" : ""}/>
        </form>
</>    
)
}

export default CreateBook;