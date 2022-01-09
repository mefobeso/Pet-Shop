import React,{ useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom';
import './newuser.css'
import axios from 'axios'

export default function NewUser() {
    const history = useHistory()
    const [newUsername,setNewUsername]= useState();
    const [newName,setNewName]= useState();
    const [newPassword,setNewPassword]= useState();
    const [newAge,setNewAge]= useState();
    const [newPhone,setNewPhone]= useState();
    const [newEmail,setNewEmail]= useState();
    const [newAddress,setNewAddress]= useState();
    const [role,setRole]= useState();
    const [roles,setRoles]= useState([]);
    const CreateUser = () =>{
        axios.post('https://petshoptmdt.herokuapp.com/auth/register',{
            username:newUsername,
            name:newName,
            password:newPassword,
            email:newEmail,
            phone:newPhone,
            address:newAddress,
            role_id:role
        })
        .then(res=>{
            alert(res.data.message)
            history.push('/admin/users')
        })
    }

    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/roles')
        .then(res=>setRoles(res.data))
    },[])

    return (
        <div className="newUser">
            <h1 className="newUserTitel">NEW USER</h1>
            <div className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" onChange={e=>setNewUsername(e.target.value)}  placeholder="Enter username"  />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" onChange={e=>setNewPassword(e.target.value)}  placeholder="Enter password"  />
                </div>
                <div className="newUserItem">
                    <label>Name</label>
                    <input type="text" onChange={e=>setNewName(e.target.value)}  placeholder="Enter name"  />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" onChange={e=>setNewPhone(e.target.value)}  placeholder="Enter phone"  />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" onChange={e=>setNewEmail(e.target.value)}  placeholder="Enter email"  />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" onChange={e=>setNewAddress(e.target.value)}  placeholder="Enter address"  />
                </div>
                <div className="newUserItem">
                    <label>Role</label>
                    <select name="role" id="role" defaultValue="Choose user role" onChange={e=>setRole(e.target.value)} className="newUserSelectRole">
                        {roles && roles.map((item,key)=>
                            <option key={key} value={item._id}>{item.name}</option>
                        )}                        
                    </select>
                </div>
                <button className="submitNewUser" onClick={()=>CreateUser()}>Create</button>
            </div>
        </div>
    )
}
