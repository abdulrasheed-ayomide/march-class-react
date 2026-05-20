
import { useContext } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../context/authContext";
import themeContext from "../context/themeContext";
import authContext from "../context/authContext";

export const Navbar = () => {

  const navHeader = {
  width: '90%',
  margin: "10px auto",
  border: "2px solid gray",
  padding: "20px",
  "border-radius": "8px",
  "box-shadow": "0 2px 8px rgba(0, 0, 0, 0.1)",
  "background-color": "#fff",
  display: "flex",
  "justify-content": "space-around",
  listStyle: "none"
}

    const {toggleTheme} = useContext(themeContext);
    const {isAuthenticated, logOut} = useContext(authContext)
    // const { cart } = useContext(AuthContext);
    
    return (
        <div>
            <ul style={navHeader}>
                <li><Link to={"/"}>Home</Link></li>        
                <li><Link to={"Product"}>Product</Link></li>
                <li><Link to={"Register"}>Register</Link></li>
                <li><Link to={"AddProduct"}>Add product</Link></li>
                <li><Link to={"About"}>About</Link></li>
                {isAuthenticated? <button onClick={logOut}>Log Out</button> : <li><Link to={"Login"}>Login</Link></li>}
                {/* <li>cart:{cart}</li> */}
                <button onClick={toggleTheme}>toggle</button>
            </ul>
        </div>
    )
} 