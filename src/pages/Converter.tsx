import React, {useEffect, useRef, useState} from 'react';
import "./Converter.css";
import {changeTitle} from "../features/ChangeTitle";
import {handleReset} from "../features/Reset";
import {calculator} from "../features/Calculator/Calculator";
import {handleSwap} from "../features/Swap";

const Converter: React.FC = () => {
    const [fromOption, setFromOption] = useState<string>('Decimal');
    const [toOption, setToOption] = useState<string>('Binary');
    const [input, setInput] = useState<string>();
    const [result, setResult] = useState<string>("");

    const titleRef = useRef<HTMLHeadingElement>(null);
    const resultRef = useRef<HTMLSpanElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(String(e.target.value));
    }

    useEffect(() => {
        changeTitle(fromOption, toOption, titleRef);
    },[fromOption, toOption])

    const convert = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (input !== undefined && resultRef.current) {
            const type = `${fromOption}-${toOption}`;
            calculator(type, input, resultRef.current);
            setResult(resultRef.current.innerText);
        }

        if (fromOption === toOption) {
            alert("Please select different conversion type");
        }
    }

    return (
        <div className="calculator-page">
            <h1 id="title" ref={titleRef}>Decimal To Binary Converter</h1>
            <form id="converter-form">
                <div className="option-container">
                    <div className="from-option-container">
                        <label htmlFor="from-option" className="option-label">From</label>
                        <select id="from-option"
                                className="option-txt"
                                value={fromOption}
                                onChange={(e) => {setFromOption(e.target.value)}}
                        >
                            <option>Decimal</option>
                            <option>Binary</option>
                            <option>Octal</option>
                            <option>Hexadecimal</option>
                        </select>
                    </div>
                    <div className="to-option-container">
                        <label htmlFor="to-option" className="option-label">To</label>
                        <select id="to-option"
                                className="option-txt"
                                value={toOption}
                                onChange={(e) => {setToOption(e.target.value)}}
                        >
                            <option>Binary</option>
                            <option>Decimal</option>
                            <option>Octal</option>
                            <option>Hexadecimal</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <p>Enter decimal number</p>
                    <input type="text"
                           id="input"
                           value={input || ''}
                           onChange={handleInputChange}></input>
                </div>
                <div className="button-container">
                    <button type="submit" id="convert-btn" className="btn" onClick={convert}>Convert</button>
                    <button type="button" id="reset-btn" className="btn" onClick={() => handleReset(setInput, setResult)}>Reset</button>
                    <button type="button" id="swap-btn" className="btn" onClick={() => handleSwap(setFromOption, setToOption, setInput, setResult)}>Swap</button>
                </div>
                <div className="result">
                    <p>{toOption} Number: <span ref={resultRef}>{result}</span></p>
                </div>
            </form>
        </div>
    );
};

export default Converter;
