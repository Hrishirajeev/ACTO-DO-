import React, { useState } from "react";
import Todoitem from "./Todoitem";

//getting the main array items via props!
//parent to child within component communication is done via props! but sibling to sibiling props commuincatiion is not possible! for that we take the craeted array from todolist to main container component so that it shared via props !!!
function TodoList(props)
{
    const activityarr = props.activityarr;
    const setActivityarr = props.setActivityarr;

    return(
        <div className="bg-yellow-200 rounded-md p-2 grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>

            {/*USing conditional rendering..to display message when no activities are added into list*/}
            <p className="text-red-500">
                {activityarr.length === 0 ? "You Haven't added any activities for today!" : ""}</p>

            {/*this is for mapping through the activity array to display them in list */}
            {
            activityarr.map(function(item,index){
               return <Todoitem item={item} index={index} id={item.id} activityarr={activityarr} setActivityarr={setActivityarr}/> //passing the item from parent to child component via props!! also the props for delete buttuon on click which actvity is linked for that>>
            })
            } 
        </div>
    )
}
export default TodoList