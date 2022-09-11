import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Homepage from './pages/Homepage'
import About from './pages/About'
import { Brand } from './components/atoms/Brand'
import { SearchField } from './components/atoms/Field'
import { Navbar, NavLink, NavigationBar } from './components/moleculs/Navigation'
import PokeDetails from './pages/PokeDetails'
import { lightTheme, darkTheme } from './components/moleculs/Themes'
import { GlobalStyles } from './components/moleculs/GlobalStyles'
import pokeBall from './assets/pokeball.png'
import { Heading } from './components/atoms/Text'

const App = () => {
    const [query, setQuery] = useState("")

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }

    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const Switcher = styled.button`
        border: none;
        padding: 12px 16px;
        border-radius: 30px;
        font-weight: bold;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
    `

    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Navbar>
                    <Brand>
                        <img className="pokeball" src={pokeBall} width={48} height={48} alt="pokeball" />
                        <Heading>PokeApp.</Heading>
                    </Brand>
                    <Switcher onClick={themeToggler}>
                        {theme === 'dark' ?
                            <span aria-label="Light mode" role="img">🌞 Light mode</span> :
                            <span aria-label="Dark mode" role="img">🌜 Dark mode</span>}
                    </Switcher>
                    <NavigationBar>
                        <SearchField placeholder='Search Pokemon' name="query" />
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <NavLink>Home</NavLink>
                        </Link>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <NavLink>About</NavLink>
                        </Link>
                        <NavLink>Profile</NavLink>
                    </NavigationBar>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/pokemon/:id" element={<PokeDetails />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App