import React,{useRef} from 'react'
import Form from './Form'

const Raw = () => {
    const ref1 = useRef(null)
    const clicked =(e)=>{
        e.preventDefault()
        console.log(ref1.current.value)
        
    }
  return (<>

  <Form ref ={ref1}/>
  <button onClick={clicked}>click here</button>

  </>)
}

export default Raw