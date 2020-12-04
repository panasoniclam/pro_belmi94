import React from 'react'
import './styles.css'
function Header() {
    return (
        <div className="header margin-bottom-medium">
            <div className="header__box">
                <div>
                    <h1 className="header__primary-text margin-right-small">
                        <a href="#" className="header__primary-link">
                            <span className="primary-link text-weight  ">Coin</span>
                            <span className="text-weight-light">Mechanic</span>
                        </a>
                    </h1>
                    <a href="#" className="header__primary-text header__primary-link header__primary-border-text">BETA</a>
                </div>
                <div className="header__primary-box">
                    <a href="#" className="btn btn-text margin-right-medium">Build</a>
                    <a href="#" className="btn btn-text margin-right-medium">Manage</a>
                      <a href="#" className="btn btn-box margin-right-medium">Resources</a>
                      <a href="#" className="btn btn-icon">☰</a>
                </div>
            </div>

        </div>
    )
}
export default Header;