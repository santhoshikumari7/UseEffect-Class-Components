
import { useState } from 'react';
import './App.css';
import FCCounter from './components/FCCounter';
import CCCounter from './components/CCCounter';

function App() {

   let [show,setShow] = useState(true);

  return (
    <div className="App">
     <button onClick={()=>{
     if(show === true){
      setShow(false);

     }else {
      setShow(false);
     }

     }}>Show/Hide Componet</button>
     <br></br>
     {show === true? <FCCounter /> : null}
     {show === true? <CCCounter /> : null}
  
    </div>
  );
}

export default App;
