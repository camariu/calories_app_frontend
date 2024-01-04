import React from 'react'

import banana from "../../assets/image/Layer-9.png"
import strawberry from "../../assets/image/Strawberry-Big-PNG.png"
import vector from "../../assets/image/Vector 3.png"
 

export default function FruitsGroup() {
  return (
    <div> 
        <img src={vector} alt=''></img>
        <img src={strawberry} alt=''></img>
        <img src={banana} alt=''></img>
         
    </div>
  )
}

