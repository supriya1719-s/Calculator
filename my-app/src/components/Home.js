import React, {useState} from 'react' 
import classes from '../css/Home.module.css' // first we import home.css file in home.js
import '../css/Demo.module.css' // second we import demo.css file in home.js
import Button from './Button' 
import '../css/Button.module.css'
export default function Home() {

const [res, setRes] = useState("")

const Buttons= ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="]; // array

const findval = ()=>{
  let result = Function("return "+res)();
  setRes(result.toString());
}

// we make function name handler
const handler = (arg) => {
  if(res === "Infinity"){
    setRes("");
    return;
  }

  if(arg == "C") setRes("");
  else if( arg == "=") findval();
  else if(arg == "Del"){
    let n = res.length;
    if(n>0)
    setRes(res.slice(0,n-1));
    // slice  returns selected elements in an array, as a new array.
  }
  else setRes(res.concat(arg))
  // we use concat to merge two or more array

  }
   return (
     <div className={classes.home}>  
{/* The only reason we uses className instead of class is because class is a reserved keyword in JavaScript */}
{/* instead of string we use variable of classes */}
{/* we will use object classes at home */}
        <div className={classes.inner}>
{/* // since React uses JSX, which is a JavaScript extension, we must use className rather than class attribute. */}
            <div className={classes.result}>  
            {/* (this is for display part - what ever we type in a calculator) */}
                <div className={classes.resbox}>
                  {res}
                </div>
            </div>
            <div className={classes.btns}>
              {Buttons.map((ele,index)=> {return <Button  handler={handler} value={ele} key={index}/>})}
              {/* ek km ko baar baar nhi skte thats why we use map */}
              {/* we will pass these button using map */}
            </div>
            </div>
        </div> 
  )
}

// we use modular.css because we have multiple component ,it is very much difficult to manage the class

