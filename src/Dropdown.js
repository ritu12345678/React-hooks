import React,{useEffect} from 'react'

const Dropdown = ({item}) => {
useEffect(()=>{
const eventHandler =(event)=>{
    console.log(event)
console.log(event.keyCode)
}

 window.addEventListener("keyup", eventHandler);
  return () => window.removeEventListener("keyup", eventHandler);
},[])

  return (<>
    <li>{item.Name}</li>
  </>)
}

export default Dropdown