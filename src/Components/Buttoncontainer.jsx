
import  '../App.css';

function Buttoncontainer({onButtonClick}) {

    const buttonNames = [
        'c', '+', '-', '*', '/','7', 
        '8', '9',"4" , '5', '6', '1', '2', '3', '0','.', '=', '(', ')'];
    return(
        <>
        <div className="buttons-container">
            {buttonNames.map( (buttonName)=> ( 
                <button className='btn-con' onClick={()=>onButtonClick(buttonName)}>{buttonName} </button>
            ))}
         </div>   
         
        </>
    );
}

export default Buttoncontainer;