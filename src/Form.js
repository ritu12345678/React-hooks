import React,{forwardRef} from 'react'

const Form = forwardRef((prop,name) => {
 
 
  
  return (<>


  <input type="text" placeholder='name'name='name' ref={name}/>
 


  </>)
})

export default Form