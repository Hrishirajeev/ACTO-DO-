import { Link, useNavigate } from "react-router-dom"; //importing this link so taht when clicks it routes to the element and shows
import {useState} from 'react';
import { Navigate } from "react-router-dom";

function Signup(props)
{
//getting the values from parent taht is mainjsx file of inputs via props
    const users =props.users
    const setusers =props.setusers

    //for storing new user name and pasword to exisiting array!!
    const [enteredusername,setusername]=useState("")
    const [enteredpassword,setpassword]=useState("")

    const navigate=useNavigate()//for navigation of an page after sign to directly to login page again like href!


     function UserInput(evt)
    {
        setusername(evt.target.value)
    }
    function PassInput(evt)
    {
        setpassword(evt.target.value)
    }

    //using setusers fucntion we add to uers array exsisting!
    function AddUser()
    {
        setusers([...users,{username:enteredusername,password:enteredpassword}])
        navigate("/")
    }

  return (
    <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hii!</h1>
            <p>SignUp here:)</p>

            <div className=" flex flex-col gap-2 my-2">
                <input type="text" 
                className='w-52 border-black rounded-md p-1 bg-transperant  border'
                placeholder="Username" 
                onChange={UserInput}></input>

                <input type="password" 
                className='w-52 border-black rounded-md p-1 bg-transperant  border'
                placeholder="Password" 
                onChange={PassInput}></input>

                <input type="text" 
                className='w-52 border-black rounded-md p-1 bg-transperant  border'
                placeholder="Confrim password" ></input>
            </div>

            <button className='bg-yellow-400 rounded-md border p-1 w-24 '
            onClick={AddUser}>
                SignUp
            </button>

            <p>Already have a account ?
                <Link  className="text-blue-700 underline" to={"/"}>Login</Link>
            </p> {/*so here we add this link to route the element */}
        </div>
    </div>
  );
}

export default Signup;