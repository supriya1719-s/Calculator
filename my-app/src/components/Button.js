import React from 'react'
import classes from '../css/Button.module.css'

export default function button({value , handler}) {
  return (
    <div className={value == "C" || value == "=" ? `${classes.calcBtns} ${classes.res}`: `${classes.calcBtns}`}   onClick={()=>handler(value)}>
        {value}   
    </div>
  )
}

// we apply condition for C and = because we want they get more space or double space.
// in 6th line we apply conditon and inside of 1st class and if conditon is true we get this classes.calsbtns ....
//  then we use another class  that is resclass and if conditions is true we get these classes and if false we get calsbtns.
//  ` ` we use this for variable name 
