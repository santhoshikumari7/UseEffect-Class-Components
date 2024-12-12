import React, {useState,useEffect} from 'react';

function FCCounter() {

    let [counter,setCounter] = useState(0);
    let [wickets,setWickets] = useState(0);

    useEffect(()=>{
        console.log("FCCounter - loaded");

    },[]);

    useEffect(()=>{
        console.log(`Counter sv changed`);
    },[counter]);

    useEffect(()=>{
        console.log(`Wickets sv changed`);
    },[wickets]);

    useEffect(()=>{
        console.log(`Counter/Wickets sv changed`);
    },[counter,wickets]);

    useEffect(()=>{
        console.log(`Any sv changed`);
    });


    useEffect(()=>{
       return()=>{
        console.log("FCCounter - component will unloads");
     };

    },[]);

  return (
    <div className='counter'>
        <h2>FCCounter</h2>
        <h1>Counter:{counter}</h1>
        <h1>Wickets:{counter}</h1>
        <button onClick={()=>{
            setCounter(counter + 1);
        }}
        >Increment</button>
        <button onClick={()=>{
            setCounter(counter - 1)
        
        }}>Decrement</button>

        <br></br>

       <button onClick={()=>{
             setWickets(wickets + 1);
        }}
        >Increment Wickets</button>
        <button onClick={()=>{
            setWickets(wickets - 1);
        }}
        >Decrement Wickets</button>
    </div>
  )
  
}

export default FCCounter
