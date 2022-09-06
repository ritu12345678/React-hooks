import React,{useEffect,useState} from 'react'
// import Dropdown from './Dropdown';

const Option = () => {
  // const[index,setIndex] = useState()
const[cursor,setcursor] = useState(0)
// useEffect(()=>{
//   console.log("uuhmjhuihuihiyhninuyu")
// if(index){setcursor(index)}
// },[index])

const optionItem =[{Name:"Men",value:"Men"},{Name:"Female",value:"Female"},{Name:"Other",value:"Other"},{Name:"yhu",value:"yuio"}]

const clicked =(index)=>{
 
  // setIndex(index)
  setcursor(index)
}

useEffect(()=>{
const eventHandler =(event)=>{
    console.log(event)

if(event.keyCode === 38 && cursor > 0){
  console.log("38 keycodeeee")
  setcursor((prev) =>prev-1 )
}
else if(event.keyCode === 40 && cursor <  optionItem.length - 1 ) {
      setcursor( (prev) => prev+1)
 
    }

}
document.addEventListener("keyup", eventHandler);
  return () => document.removeEventListener("keyup", eventHandler);
},[cursor])
// console.clear()
console.log("cursorrrrr",cursor)

  return (<>

  <div className='size'>
 <input type="text" 
 name="test"
 placeholder='Please choose option...'
 value ="choose your size"
 readOnly = {true} className="field"
 /> 
 <ul className="list">
{optionItem.map((item,index)=> <li key ={index}style={index==cursor?{background:"red"}:{background:"green"}} onClick={()=>{clicked(index)}} > {item.Name}</li> )}
</ul> 
{/* <ul>
  <li name >name</li>
   <li>Roll</li>
    <li>Course</li>
     <li>Address</li>
  
</ul> */}
 </div>
    
 </> )
}

export default Option