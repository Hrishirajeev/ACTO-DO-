import React, { useState } from "react";

//getting the main container props from parent component to child component via props
function AddTodoForm(props) {
    const activityarr = props.activityarr;
    const setActivityarr = props.setActivityarr;

    const [newactivity, setNewActivity] = useState(""); //this is state for storing the newly addedactivity that is typed in input field

    //this is for handling the input field when user clicks...the evnt fires to target the input field and then the value of that input field is stored in activity state via setActivity function!
    function handleChange(evt)
    {
        setNewActivity(evt.target.value);
    }

    function handleAdd()
    {
      setActivityarr([...activityarr, { id:activityarr.length + 1, activity: newactivity }]); //this is for adding the activity to the list when add button is clicked, when add button is clicked it will call this function and add the activity to the list by using setActivityarr function and also adding a unique id to each activity by using 
    }

  return (
     <div className="flex flex-col gap-3 bg-white p-0">
        <h1 className="text-2xl font-bold">Manage Activities</h1>
        <div>
            <input 
            value={newactivity} 
            onChange={handleChange} 
            type="text" className="border border-black rounded bg-transparent p-2 placeholder:text-gray-700" placeholder="Your Next Activity?"/>
            
            <button className="bg-black border border-black rounded-r-md text-white p-2"
            onClick={handleAdd}>
              Add</button>
        </div>
    </div>
  );
}
export default AddTodoForm;