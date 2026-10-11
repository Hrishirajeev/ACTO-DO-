//this is component #1 that is header 
function Header(props){
    return (
      <div>
        <h1 class="text-2xl font-bold">Hello, {props.username}</h1>
        <p>I Help You Manage Your Activities :)</p>
      </div>
    )
}

export default Header