import React, { useState, useEffect } from "react";
import { Input, Select, InputNumber, Switch, Button, Radio } from 'antd';

import './styles.css';
import 'antd/dist/antd.css';

//image
import muted from  './../images/muted.png'
//component
import Browser from './Browser'
const { Option } = Select;
const onChange = (checked) => {
    console.log(`${checked}`)
}
const showSwitch = option => {
    if (option.length > 0) {
        return option.map((value, index) => {
            return (
                <div>
                    <div className="margin-bottom-small">
                        <Switch defaultValue={value.status} key={index} onChange={onChange} />
                        <span className="token__primary--sub  padding-left-small display-inline-block">{value.name}</span>
                    </div>
                    <h1 className="token__primary--sub token__primary--heading  ">{value.content}</h1>
                </div>
            )
        })
    }
}
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
    const number = [
        {
            id: 1,
            name: "Token name",
            tagInput: 1000
        },
        {
            id: 2,
            name: " Symboy",
            tagInput: 1023
        }
    ]

    const optionSwitch = [
        {
            name: 'Mintable',
            status: true,
            content: "Allow new coins to be created (minted) by the contract owner."
        },
        {
            name: 'Burnable',
            status: false,
            content: "Allow some coins to be burnt (destroyed) at a later date, reducing the total supply."
        },
        {
            name: 'Pausable',
            status: true,
            content: "Allow your smart-contract to be paused, preventing transfers."
        },
        {
            name: 'Enable Snapshots',
            status: true,
            content: "Allow your smart-contract to be paused, preventing transfers."
        }
    ]
    return (
        <div>
            <Browser></Browser>
            <div className="token">
                <div className="margin-bottom-small">
                    <h1 className="token__primary--main margin-bottom-small">Token Builder</h1>
                    <label for="cars" className="token__primary--sub margin-right-small">Define, Deploy and Sell your own ERC20 Token on the</label>
                    <Select defaultValue="lucy" style={{ width: 200, background: '#202229' }} >
                        {stateOptions.map((localState, index) => (
                            // <Option className="token-option" key={localState.id}>{localState.value}</Option>
                            <Option value={localState.value} key={localState.id}> {localState.value}</Option>
                        ))}
                    </Select>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h1 className=" browser__primary--main margin-bottom-small">Token:</h1>
                        {token.map(function (object, i) {
                            return (< div key={object.id} className="margin-bottom-small" >
                                <h4 className="token__primary--sub   ">{object.name}</h4>
                                <Input placeholder={object.tagInput} className="margin-bottom-medium-token input-token input-token__text token__primary--sub" />
                            </ div>);
                        })}
                        {number.map(function (object, i) {
                            return (< div key={object.id} className="margin-bottom-small" >
                                <h4 className="token__primary--sub   ">{object.name}</h4>
                                <InputNumber style={{ color: 'white' }} className="margin-bottom-medium-token input-token input-token__text token__primary--sub" min={1} max={10} defaultValue={3} />
                                {/* <input placeholder={object.tagInput}  type="text" className="margin-bottom-medium-token input-token input-token__text token__primary--sub"></input> */}
                            </ div>);
                        })}
                        <h4 className="token__primary--sub   ">The Token's smart-contract uses the open-zepplin community vetted library.
                         Contracts are compiled with solidity v0.6.8. And can be verified on etherscan as "Solidity (Single File)".</h4>
                        <Radio.Group value='large' onChange={onChange}>
                            <Radio.Button value="large" className="token__primary--button token__primary--button-1">Large</Radio.Button>
                            <Radio.Button value="default" className="token__primary--button token__primary--button-2">Default</Radio.Button>

                        </Radio.Group>
                    </div>
                    <div className="col-1-of-2 token-hover">
                        <h1 className=" browser__primary--main margin-bottom-small">Advanced Options:</h1>
                        <h4 className="token__primary--sub   ">Enabling the features below, will increase the size of the token's smart-contract, slightly raising the cost of deployment.</h4>
                        {showSwitch(optionSwitch)}

                    </div>
                </div> 
                <div>
                <img src={muted} className="token__image"/>
            </div>
            </div>
           
            <div className="clearfix"></div>
        </div>
    )
}
export default Token;