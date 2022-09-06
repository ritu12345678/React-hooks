import React,{useRef} from 'react'
import Form from './Form'

const MainComponent = () => {
    const ref1 = useRef(null)
    const submit =(e)=>{
        e.preventDefault()
        console.log(ref1.current.value)
       
    }
  return (<>

  <Form ref ={ref1}/>
  <button onClick={submit}>Submit</button>

  </>)
}

export default MainComponent