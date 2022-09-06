import { Button } from 'bootstrap'
import React,{useState,useMemo,useEffect,useCallback}from 'react'

const Demo = () => {
 
const[add,setAdd] =  useState(0)
const[minus,setMinus] =  useState(100)
//  const multiply =()=>{

//     console.log("function callledddddddddddd")
//     return add*10
//   }
let r 
useMemo(()=>{
    console.log("clickedddddddddddddddd")
    return r= add*10
})
console.log("rrrrr",r)
  return (<>
  <div>
  <h1>{add}</h1>
  <h2>{minus}</h2>
  {/* {Multiplication} */}
<button onClick={()=>setAdd(add+5)}>ADD</button>
<button onClick={()=>setMinus(minus-1)}>MINUS</button>
</div>
 </> )
}

export default Demo