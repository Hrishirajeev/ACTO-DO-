import { useState } from "react";
import { Link } from "react-router-dom"; //importing this link so taht when clicks it routes to the element and shows
import { useNavigate } from "react-router-dom"; //for naviagtion of particular page after a login for example

function Login(props)
{
    const [enteredusername,setusername]=useState("")
    const [enteredpassword,setpassword]=useState("")

    const navigate=useNavigate()//for navigation of an page after login success like href!

    //getting the values from parent taht is mainjsx file of inputs via props
    const users =props.users

    //to show a small text using conditional redering of signin message
    const [registereduser,setregistereduser]=useState(true)

    
    //for userinput takle and store ...
    function UserInput(evt)
    {
        setusername(evt.target.value)
    }
    function PassInput(evt)
    {
        setpassword(evt.target.value)
    }

    //running a foreach loop to check and itrate to array!
    function Checkuser()
    {
        let userfound=false

        users.forEach(function(item)
        {
            if(item.username == enteredusername && item.password ==enteredpassword)
            {
                console.log("loginsucess")
                userfound=true
                navigate("/landing", 
                    {
                        state:{username:enteredusername} //this is for printing the name in landing page after sucessfull login! this is done via state!!
                    })
            }
            
        })
        
        if(userfound==false)
            {
                console.log("loginfailed")
                setregistereduser(false)
            }
    }

  return(
    <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hii!</h1>

            {registereduser?<p>I help you manage activities after your login in :)</p>:<p className="text-red-600">please sign up before login in</p>}

            <div className=" flex flex-col gap-2 my-2">
                <input type="text" 
                className='w-52 border-black rounded-md p-1 bg-transperant  border'
                placeholder="Username"
                onChange={UserInput} ></input>

                <input type="text" 
                className='w-52 border-black rounded-md p-1 bg-transperant  border'
                placeholder="Password"
                onChange={PassInput}></input>

            </div>

            <button onClick={Checkuser}className='bg-purple-500 rounded-md border p-1 w-24 '>
                Login
            </button>

            <p>Don't have a account ? 
                <Link  className="text-red-700 underline" to={"/signup"}>signup</Link>
            </p> {/*so here we add this link to route the element */}
        </div>
    </div>
  );
}

export default Login;