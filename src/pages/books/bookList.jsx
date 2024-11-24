import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BookList = () =>{

const[books,setBooks]=useState([]);
const[loading,setLoading] = useState(false);


const API_URL = "https://6743071fb7464b1c2a635cd3.mockapi.io/api/books";


const getBooks =  async () => {
    setLoading(true);
    try {
        const response = await axios.get(API_URL);
        const{data , status} = response;

        if (status === 200) {
            setLoading(false)
            setBooks(data);
        }
    } catch (error) {
        setLoading(false)
        console.log(error);
    }

}

useEffect(()=>{
    getBooks();
},[])


    return(
    <>
        <div className="bok_list_container">
                <h2>Book List</h2>
                <div className="create_book">
                    <Link to={'/create-book'}>Add Books</Link>
                </div>
                {
                    loading ? (<>
                       <div className="loader"></div>
                    </>) : 
                    (
                        <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((item,index)=>{
                                    return(
                                        <>
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.book_name}</td>
                                            <td>{item.author_name}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                        </>
                                    )
                                })}
                            
                            </tbody>
                          </table>
                        </>
                    )
                }
               
        </div>
    </>
)}