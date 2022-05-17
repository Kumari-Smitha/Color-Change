import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("pink")
  const arr = ["blue","red","yellow","black","white","voilet","green","grey"]

  useEffect(()=>{
    arr.map((c)=>{
      setTimeout(()=>{
        setColor(c)
      })
    })
  },[arr,color])
  
  return (
    <div className="App">
      <div className='inner' style={{backgroundColor:color}}>

      </div>
      
    </div>
  );
}

export default App;
