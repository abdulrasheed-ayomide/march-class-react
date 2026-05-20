// import React, { useContext, useEffect, useState } from "react";
// import AuthContext from "../context/authContext";
import { useContext } from "react";
import authContext from "../context/authContext";





export const Home = () => {
    // const [count, setCount] = useState(1);
    // const [monitor, setMonitor] = useState(true);
    // const {name, email, cart, setCart} = useContext(AuthContext);
    // const { name } = auth;
    // console.log(auth, 'kff');


    // useEffect(() => {
    //     const Timer = setInterval(() => {
    //         setCount(count + 1)
    //         console.log("Hello i am running");

    //     }, 1000);

    //     return () => {
    //         clearInterval(Timer)
    //     }

    // }, [monitor]);

    const { user } = useContext(authContext);

    return (
        // <div>Home {count}
        //     <button onClick={() => setMonitor(prev => !prev)}>Run</button>
        //     <p>name:{name}</p>
        //     <p>email:{email}</p>
        //     <p>cart:{cart}</p>
        //     <button onClick={() => setCart(cart+ 1)}>Add to cart</button>

        // </div>

        <div>
            {
                user ? <div>
                    <h1>Hi {user.name} welcome</h1>
                    <p>your Age {user.age}</p>
                    <p>Email: {user.email}</p>
                </div> : <p>User not Found, Login to enjoy our service</p>
            }
        </div>
    )
}