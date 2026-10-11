//this is component #2 that is card 
//instead of using div, we are going to use by props passing from parent component to child component that is app.jsx to card.jsx
function Card(props) {
  return (
    <div style={{backgroundColor: props.bgColor}} className="px-10 border rounded-md grow p-10 text-center">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}
export default Card