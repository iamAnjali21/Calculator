import  '../App.css';

function Display({displayValue})
{ 
  return (
    <div>
  <input className="display" type="text" placeholder='' value={displayValue} readOnly/>
  </div>
  );
     
}

export default Display;
