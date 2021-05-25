import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

   const pk = useRef()
  const handleweel =(e)=>{
 
    if (e.deltaY > 0){pk.current.scrollLeft += 100;
      console.log('scrolling left')} 
    else{pk.current.scrollLeft -= 100;
      console.log('scrolling right')} 
  }
  return (
    <div className="App">
<div class='mmain ' ref={pk}style={{overflow: 'scroll hidden'}} onWheel={handleweel}>
  <div class="wrapper" >
     <div style={{backgroundColor:'red'}}>div 1</div>
     <div style={{backgroundColor:'blue'}}>div 2</div>
     <div style={{backgroundColor:'red'}}>div 3</div>
     <div style={{backgroundColor:'blue'}}>div 4</div>
     <div style={{backgroundColor:'red'}}>div 5</div>
     <div style={{backgroundColor:'blue'}}>div 6</div>
     <div style={{backgroundColor:'red'}}>div 7</div>
     <div style={{backgroundColor:'blue'}}>div 8</div>
  </div>
</div>
    </div>
  );
}

export default App;


