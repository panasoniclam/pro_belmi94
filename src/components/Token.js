import React, { useState, useEffect } from "react";
import './styles.css';
function Token() {
    const initialValue = [
        { id: 0, value: " --- Select a State ---" }];
    const allowedState = [
        { id: 1, value: "Alabama" },
        { id: 2, value: "Georgia" },
        { id: 3, value: "Tennessee" }
    ];
    const [stateOptions, setStateValues] = useState(initialValue);
    useEffect(() => {
        setStateValues(allowedState);
    }, []);
    const token = [
        {
            id: 1,
            name: "Token name",
            tagInput: "e.g Awesomecoint"
        },
        {
            id: 2,
            name: "Token Symboy",
            tagInput: "e.g Awesomecoint"
        }
    ];
    const  number  = [
        {
            id: 1,
            name: "Token name",
            tagInput:1000
        },
        {
            id: 2,
            name: "Token Symboy",
            tagInput:1023
        }
    ]
    return (
        <div className="token">
            <div className="margin-bottom-small">
                <h1 className="token__primary--main margin-bottom-small">Token Builder</h1>
                <label for="cars" className="token__primary--sub margin-right-small">Define, Deploy and Sell your own ERC20 Token on the</label>
                <select className="token-select">
                    {stateOptions.map((localState, index) => (
                        <option className="token-option" key={localState.id}>{localState.value}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h1 className=" browser__primary--main margin-bottom-small">Token:</h1>
                    {token.map(function (object, i) {
                        return (< div key={object.id} className="margin-bottom-small" >
                              <h4 className="token__primary--sub   ">{object.name}</h4>
                              <input placeholder={object.tagInput}  type="text" className="margin-bottom-medium-token input-token input-token__text token__primary--sub"></input>
                        </ div>);
                    })} 
                    {number.map(function (object, i) {
                        return (< div key={object.id} className="margin-bottom-small" >
                              <h4 className="token__primary--sub   ">{object.name}</h4>
                              <input placeholder={object.tagInput}  type="text" className="margin-bottom-medium-token input-token input-token__text token__primary--sub"></input>
                        </ div>);
                    })}   
    
                </div>
                <div className="col-1-of-2">
                    test
                </div>
            </div>
        </div>
    )
}
export default Token;