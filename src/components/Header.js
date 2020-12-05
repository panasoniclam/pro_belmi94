import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link, NavLink
} from "react-router-dom";
import './styles.css'

const CustomNavLink = ({ label, to, onlyWhenActive, classDefault }) => {
    return (
        <Route
            path={to}
            exact={onlyWhenActive}
            children={({ match }) => {
                const active = match ? 'active' : ''
                return (<NavLink activeClassName={`${active} ${classDefault}`} to={to}>{label}</NavLink>)
            }}
        />
    )
}
const redirec = [
    {
        label: "Build",
        to: "/build",
        exact: false
    },
    {
        label: "Manage",
        to: "/manage",
        exact: false
    },
    {
        label: "Resource",
        to: "/resource",
        exact: false
    }
]
const showLink = redirec => {
    if (redirec.lenght < 0) {
        return null
    }
    return redirec.map((value, index) => {
        return (
            <Link to={value.to} key={index} exact={value.exact}
                className="btn btn-text margin-right-medium">{value.label}</Link>
        )
    })
}
function Header() {
    return (
        <div className="header margin-bottom-medium">
            <div className="header__box">
                <div>
                    <h1 className="header__primary-text margin-right-small">
                        <CustomNavLink label="Coin" to="/" onlyWhenActive="false" classDefault="primary-link text-weight  " />
                        <CustomNavLink label="Mechain" to="/" onlyWhenActive="false" classDefault="text-weight-light" />
                    </h1>
                    <NavLink to="/beta" className="header__primary-text header__primary-link header__primary-border-text">BETA</NavLink>
                </div>
                <div className="header__primary-box">
                    {showLink(redirec)}
                    <a href="#" className="btn btn-icon">☰</a>
                </div>
            </div>

        </div>
    )
}
export default Header;