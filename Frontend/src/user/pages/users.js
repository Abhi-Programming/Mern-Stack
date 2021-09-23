import React from 'react';
import { useParams } from 'react-router-dom';
import UserList from '../component/userList';
const users = () =>{
    const user= [{id:'u1',
                  Name:'Abhishek Parmar' ,
                  image :'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                  places : 3 
                }
             ];
            return <UserList items={user}/>
};

export default users;





