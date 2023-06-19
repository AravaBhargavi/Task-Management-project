import React, {useState} from 'react';
const Calculator = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();
    const handleNum1 = (e) => {
        setNum1(Number(e.target.value));
    };
    const handleNum2 = (e) => {
        setNum2(Number(e.target.value));
    };
    const handleAddition = () => {
        setResult(num1+num2);
    };
    const handleSubtraction = () => {
        setResult(num1-num2);
    };
    const handleMultiplication = () => {
        setResult(num1*num2);
    };
    const handleDivision = () => {
        setResult(num1/num2);
    };
    return(
        <div>
            <input type='number' value={num1} onChange={handleNum1}></input><br></br>
            <input type='number' value={num2} onChange={handleNum2}></input><br></br>
            <button type='button' onClick={handleAddition}>Addition</button>
            <button type='button' onClick={handleSubtraction}>Subtraction</button>
            <button type='button' onClick={handleMultiplication}>Multiplication</button>
            <button type='button' onClick={handleDivision}>Division</button>
            <p>Result:{result}</p>
        </div>
    );
}
export default Calculator;