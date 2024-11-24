import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Books } from "../pages/books";
import CreateBook from "../pages/books/create-book";

const AppRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/create-book" element={<CreateBook/>}/>
        </Routes>

        </>
    )
}

export default AppRoutes;