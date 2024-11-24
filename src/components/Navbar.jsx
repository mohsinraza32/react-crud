import { Link } from "react-router-dom";

const NavBar = ({menu}) =>{
    return(
        <>
            <nav>
                    <ul class="main_menu">
                      {
                        menu.map((item,index)=>{
                            return(
                                <>
                                <li key={index}><Link to={item.url}>{item.name}</Link></li>
                                </>
                            )
                        })
                      }
                    </ul>
                </nav>
        </>
    )
}


export default NavBar;