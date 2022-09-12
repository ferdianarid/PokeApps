import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Homepage from './pages/Homepage'
import GenericNotFound from './pages/GenericNotFound'
import About from './pages/About'
import { Brand } from './components/atoms/Brand'
import { SearchField } from './components/atoms/Field'
import { Navbar, NavLink, NavigationBar } from './components/moleculs/Navigation'
import PokeDetails from './pages/PokeDetails'
import { lightTheme, darkTheme } from './components/moleculs/Themes'
import { GlobalStyles } from './components/moleculs/GlobalStyles'
import pokeBall from './assets/pokeball.png'
import { Heading } from './components/atoms/Text'
import Footer from './components/organism/Footer'
import Moon from './assets/icons/moon.svg'
import Sun from './assets/icons/sun.svg'
import { FaGithub } from 'react-icons/fa'
import PageLayouts from './layouts/PageLayouts'

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
        &:hover {
            cursor: pointer;
        }
    `

    const OAuthWrapper = styled.div`
        display: flex;
        align-items: center;
        grid-gap: 12px;
    `

    const OAuthButton = styled.div`
        border: none;
        display: flex;
        align-items: center;
        grid-gap: 8px;
        border-radius: 12px;
        padding: 12px 16px;
        font-weight: bold;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        &:hover {
            cursor: pointer;
        }
    `

    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <PageLayouts>
                    <Navbar>
                        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                            <Brand>
                                <img className="pokeball" src={pokeBall} width={36} height={36} alt="pokeball" />
                                <Heading>PokeApps</Heading>
                            </Brand>
                        </Link>
                        <Switcher onClick={themeToggler}>
                            {theme === 'dark' ?
                                <span aria-label="Light mode" style={{ display: "flex", alignItems: "center" }}>
                                    <img src={Sun} width={20} style={{ marginRight: "6px" }} height={20} alt="sun" />
                                    Light mode</span> :
                                <span aria-label="Dark mode" style={{ display: "flex", alignItems: "center" }}>
                                    <img src={Moon} width={20} style={{ marginRight: "6px" }} height={20} alt="moon" />
                                    Dark mode</span>}
                        </Switcher>
                        <NavigationBar>
                            <SearchField placeholder='Search Pokemon' name="query" />
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <NavLink>Home</NavLink>
                            </Link>
                            <Link to="/about" style={{ textDecoration: "none" }}>
                                <NavLink>About</NavLink>
                            </Link>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <NavLink>Profile</NavLink>
                            </Link>
                            <OAuthWrapper>
                                <Link to="/signin" style={{ textDecoration: "none" }}>
                                    <OAuthButton>Sign in</OAuthButton>
                                </Link>
                                <Link to="/github" style={{ textDecoration: "none" }}>
                                    <OAuthButton><FaGithub size={18} /> Sign up with Github</OAuthButton>
                                </Link>
                            </OAuthWrapper>
                        </NavigationBar>
                    </Navbar>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/pokemon/:id" element={<PokeDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<GenericNotFound />} />
                    </Routes>
                    <Footer />
                </PageLayouts>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App