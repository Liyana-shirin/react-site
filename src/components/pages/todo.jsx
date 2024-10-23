import { useState } from "react"
import { Stack } from "react-bootstrap"

const LearnState=()=>{
    const [counter,setCounter]=useState({counter1:0,counter2:0})


    const HandleIncrement1=()=>{
        // counter.counter1=counter.couner1+1
        // setCounter({...counter,counter1:counter.counter1+1})
        setCounter((counter)=>({...counter,counter1:counter.counter1 + 1}))
    }
    const HandleDecrement1=()=>{
        // counter.counter1=counter.couner1+1
        // setCounter({...counter,counter1:counter.counter1+1})
        setCounter((counter)=>({...counter,counter1:counter.counter1 + 1}))
    }

    const HandleIncrement2=()=>{
        // counter.counter1=counter.couner1+1
        // setCounter({...counter,counter1:counter.counter1+1})
        setCounter((counter)=>({...counter,counter2:counter.counter2 + 1}))
    }

    const HandleDecrement2=()=>{
        // counter.counter1=counter.couner1+1
        // setCounter({...counter,counter1:counter.counter1+1})
        setCounter((counter)=>({...counter,counter2:counter.counter2 + 1}))
    }   
    return <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        {/* <div>{counter}</div> */}
        <Stack direction="horizontal" gap={5} className="d-flex justify-content-center">
        <button onClick={HandleIncrement1} className="btn btn-primary w-25" >Increment {counter} </button>
        <button onClick={HandleDecrement2} className="btn btn-danger w-25">Decrement {counter}</button>
        </Stack>
    </div>
    
}
export default LearnState