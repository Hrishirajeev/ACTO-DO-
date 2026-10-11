import Header from '../components/header'
import Card from '../components/card'
import TodoContainer from '../components/todoContainer'
import { useLocation } from 'react-router-dom'

function Landing(){
const data =useLocation()


  return (
    <div class="bg-black p-10">
      <div class="bg-gray-200 rouneded-md p-10">
        {/*header */}
        <Header username={data.state.username}/>

        {/*card*/}
   
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgColor={"#8272DA"} title={"25"} subtitle={"kochi"} />
          <Card bgColor={"#8272DA"} title={"30"} subtitle={"bangalore"} />
          <Card bgColor={"#8272DA"} title={"35"} subtitle={"chennai"} />
        </div>

        {/*todo container*/}
        <TodoContainer/>
      </div>
    </div>
  )
}

export default Landing