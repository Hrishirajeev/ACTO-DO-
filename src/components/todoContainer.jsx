//component#3 that is todo container
//Here TODO container is splitted into two parts *one is manage activities small component and other is list of activities small component. In this file we are going to create manage activities small component and in next file we are going to create list of activities small component.
import AddTodoForm from './Addtodoform.jsx'
import TodoList from './todolList.jsx'
import React, { useState } from "react";

function TodoContainer(){

    const [activityarr, setActivityarr] = useState([
        {
        id:1,
        activity:"walking at 5am"
        },
        {
        id:2,
        activity:"reading book at 6am"
        },
        {
        id:3,
        activity:"gym at 7am"
        }
    ]) //this is state for storing activities in an array form

return(
    <div>

        <div className="flex justify-between gap-5"> {/*This is main div for both 2sub--components*/}
            <AddTodoForm activityarr={activityarr} setActivityarr={setActivityarr} /> {/*passing the state and setstate as props to child component*/}
            <TodoList activityarr={activityarr} setActivityarr={setActivityarr} /> {/*passing the state and setstate as props to child component*/}
        </div>

    </div>
)
}
export default TodoContainer