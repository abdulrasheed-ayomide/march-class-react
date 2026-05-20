//React Interpolation. putting javascript inside html code
export const UserList = ()=>{
    const name = 'Ayomide';
    const age = 25

    const user = {
        name: 'Ayomide',
        age: 30,
        gender: 'male'
    }

    const userList = [
        {
            name: 'glory',
            age: 20,
            gender: 'female'
        },
            
        {
             name: 'samad',
            age: 13,
            gender: 'male'
        },
        
        {
             name: 'ayo',
            age: 21,
            gender: 'male'
        }

    ]

    return (
        <>
            {/* <h1>Name: {name}</h1>
            <h2>Age: {age}</h2> */}

            <ul>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.gender}</li>
            </ul>
                {/* we can also use map to display the list of users in the array  */}
            {/* <div>
                {userList.map((per, i)=>{
                    const cap = per.name.toUpperCase()
                    return <ul key={i}>
                        <li>{cap}</li>
                        <li>{per.age}</li>
                        <li>{per.gender}</li>
                    </ul>
                })}
            </div> */}

            <div>
                {userList.map((per, i)=>(
                    <ul key={i}>
                        <li>{per.name}</li>
                        <li>{per.age}</li>
                        <li>{per.gender}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}