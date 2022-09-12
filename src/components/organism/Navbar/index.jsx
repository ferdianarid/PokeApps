import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Brand } from '../../atoms/Brand'
import { SearchField } from '../../atoms/Field'
import pokeBall from '../../../assets/pokeball.png'

const Navbar = () => {
    const [query, setQuery] = useState("")

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }

    const Navbar = styled.div`
        padding: 30px 100px;
        color: #FFF;
        font-size: 16px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        @media only screen and (max-width: 768px) {
            padding: 30px 20px;
        }
    `
    const NavLink = styled.p`
        font-size: 20px;
        color: #FFF;
        @media only screen and (max-width: 768px) {
            display: none;
        }
    `
    return (
        <React.Fragment>
            <Navbar>
                <Brand>
                    <img className="pokeball" src={pokeBall} width={48} height={48} alt="pokeball" />
                    <h1>PokeApps</h1>
                </Brand>
                <div className="navigation">
                    <SearchField placeholder='Search Pokemon' name="query" />
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <NavLink>Home</NavLink>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <NavLink>About</NavLink>
                    </Link>
                    <NavLink>Profile</NavLink>
                </div>
            </Navbar>
        </React.Fragment>
    )
}

export default Navbar