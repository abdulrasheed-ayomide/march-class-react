import { useState } from "react";
import { Button } from "./Button";

export const UsestateComponent = ()=>{
    const [name, setName] = useState('Ayomide')
    const [number, setNumber] = useState(0)

    // let name = 'Ayomide'
    
    const handleChangeName = (props)=>{
        console.log('done changing....');
        // name = 'Rasheed'
        // console.log(name);
        
        if (name === 'Ayomide') {
            setName('Rasheed')
        }else{
            setName('Ayomide')
        }
    }

    // increment and decrement number using useState

    const handleIncrease = ()=>{
        // alert('hello world')
        setNumber(number + 1)
        
    }

    const handleDecrease = ()=>{
        // alert('hello world')
        setNumber(number -1)
        
    }

    return(
        <div>
            <h1>{name}</h1>
            {/* <button onClick={handleChangeName}>change name</button> */}
            <Button function={handleChangeName} text={"Change Name"} />
            <h1>{number}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}