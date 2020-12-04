import React from 'react';
import './styles.css';
function Browser() {
    return (
        <div className="browser margin-bottom-medium">
            <div className="browser__box">
                <h1 className="browser__primary--main margin-bottom-small">Browser wallet required.</h1>
                <h3 className="browser__primary--sub margin-bottom-small">CoinMechanic requires a browser wallet like Metamask. Metamask is a free browser extension for Chrome and Firefox.</h3>
                <a href="#" className="   btn-browser">Get Metamask </a>
            </div>            
        </div>
    )
}
export default Browser;