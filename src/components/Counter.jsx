import React, { useState } from "react";

// this will not reflect in actual dom but in console only to do so check the next step

// 1st step

// const Counter = ()=>{
//     let count = 0;

//     const increamentCount = ()=>{
//         console.log("post",count);
//         count++;
//         console.log("post",count);
//     }
//     return (
//         <div>
//             <h1>Counter App: {count}</h1>
//             <button onClick={increamentCount}>Increament</button>
//             <button>Decreament</button>
//         </div>
//     )
// }


// 2nd step:- use of hooks (in this we will use useState Hook);
// to update things on dom always use hooks

const Counter = ()=>{             ///whenever you execute or updata the value of count this whole function get updated
    const [count, setCount] = React.useState(1);    // useState(0) shows that we are initiating count from 0 count is a variable and setCount is a function 
    const [color, setColor] = React.useState("red");

    const increamentCount = ()=>{
        
        
        setCount(count+1);      //with this we can interact with the real dom
        
        if(count%2===0){
            setColor("red");
        }
        else{
            setColor("green");
        }
       
    }

    return (
        <div>             
             {/* if you dont want a div you can wrap it around fragment<></> but in this you can have className */}
            <h1 style={{color:color}} >Counter App: {count}</h1>
            <button onClick={increamentCount}>Increament</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }

                if(count%2===0){
                    setColor("red");
                }
                else{
                    setColor("green");
                }

            }}>Decreament</button>;   
            
            <button onClick={()=>{setCount(count*2)}}>Double</button>

            {/* //instead of writing function at the top you can write like using arrow function as you can see in the decreamnet button/function */}
        </div>
    )
}

export default Counter;