import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

export default function Main() {
    interface IUser {
        name: string, 
        surname: string,
        age: number
    }

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);
    
    const getUsers = () => {
        fetch("/users")
        .then(response=> response.json())
        .then(users=> setUsers(users));
    }

    // useEffect(()=>{
    //     getUsers();
    // },[]);

    return (
        <div>
            <h1>USERS</h1>
           <Button onClick={()=> getUsers()} variant="secondary">Get users</Button>
           {users && users.map((user:IUser)=> <p>{user.name} {user.surname} {user.age}</p>)}
        </div>
    )
}
