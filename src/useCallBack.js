import React from 'react'
import { memo } from 'react'

const Childcomponent = ({data}) => {
    console.log("child component rendering ")
    console.log("data",data)
  return (<>
    <h1>child Component</h1>
  </>)
}

export default memo(Childcomponent)