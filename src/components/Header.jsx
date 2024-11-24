import Logo from "./Logo";
import NavBar from "./Navbar";
import MyLogo from '../logo.svg'

const Header = () =>{

const menu = [
    {
        name:"Home",
        url:"/"
    },
    {
        name:"About Us",
        url:"/about-us"
    },
    {
        name:"Contact Us",
        url:"/contact-us"
    },
    {
        name:"Services",
        url:"/services"
    },
    {
        name:"Books",
        url:"/books"
    },
] 


    return(
        <>
         <header>
            <div class="conainer">
               <Logo logo={MyLogo}/>
               <NavBar menu={menu}/>
            </div>
        </header>
        </>
    )
}


export default Header;