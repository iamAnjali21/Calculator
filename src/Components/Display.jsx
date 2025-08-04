import  '../App.css';

function Display({displayValue})
{ 
  return (
    <div>
    <h1>calculator</h1>
  <input className="display" type="text" placeholder='' value={displayValue} readOnly/>
  </div>
  );
     
}

export default Display;