import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import About from './pages/About'
import Homepage from './pages/Homepage'
import PokeDetails from './pages/PokeDetails'
import GenericNotFound from './pages/GenericNotFound'
import { Brand } from './components/atoms/Brand'
import { SearchField } from './components/atoms/Field'
import { Navbar, NavLink, NavigationBar, MobileNav } from './components/moleculs/Navigation'
import { lightTheme, darkTheme } from './components/moleculs/Themes'
import { GlobalStyles } from './components/moleculs/GlobalStyles'
import { Heading } from './components/atoms/Text'
import pokeBall from './assets/pokeball.png'
import Footer from './components/organism/Footer'
import Moon from './assets/icons/moon.svg'
import Sun from './assets/icons/sun.svg'
import PageLayouts from './layouts/PageLayouts'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import { OAuthButton } from './components/atoms/Button/OAuthButton'
import { Switcher } from './components/atoms/Button/Switcher'
import { OAuthWrapper } from './components/atoms/Wrapper'
import Speech from './pages/Speech'
import { FaBars, FaTimes } from 'react-icons/fa'

const App = () => {
    const [query, setQuery] = useState("")
    const [open, setOpen] = useState(false)

    const location = useLocation()

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }

    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const CollapseButton = styled.div`
        padding: 8px;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    useEffect(() => {
        setOpen(false)
    }, [location])

    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <PageLayouts>
                    <Navbar>
                        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                            <Brand>
                                <img className="pokeball" src={pokeBall} width={30} height={30} alt="pokeball" />
                                <Heading style={{ fontSize: "18px" }}>PokeApps</Heading>
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
                        <div className="hamburger">
                            {open ? <CollapseButton onClick={() => setOpen(false)}><FaTimes size={24} /></CollapseButton> : <CollapseButton onClick={() => setOpen(true)}><FaBars size={24} /></CollapseButton>}
                        </div>
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
                            <Link to="/speech" style={{ textDecoration: "none" }}>
                                <NavLink>Speech</NavLink>
                            </Link>
                            <OAuthWrapper>
                                <Link to="/signin" style={{ textDecoration: "none" }}>
                                    <OAuthButton>Sign in</OAuthButton>
                                </Link>
                                <Link to="/signup" style={{ textDecoration: "none" }}>
                                    <OAuthButton>Sign Up</OAuthButton>
                                </Link>
                            </OAuthWrapper>
                        </NavigationBar>

                        {open ? <MobileNav className='mobile-nav'>
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
                            <Link to="/speech" style={{ textDecoration: "none" }}>
                                <NavLink>Speech</NavLink>
                            </Link>
                            <OAuthWrapper>
                                <Link to="/signin" style={{ textDecoration: "none" }}>
                                    <OAuthButton>Sign in</OAuthButton>
                                </Link>
                                <Link to="/signup" style={{ textDecoration: "none" }}>
                                    <OAuthButton>Sign Up</OAuthButton>
                                </Link>
                            </OAuthWrapper>
                        </MobileNav> : ""}
                    </Navbar>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="about" element={<About />} />
                        <Route path="speech" element={<Speech />} />
                        <Route path="pokemon/:id" element={<PokeDetails />} />
                        <Route path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="*" element={<GenericNotFound />} />
                    </Routes>
                    <Footer />
                </PageLayouts>
            </ThemeProvider>
        </React.Fragment >
    )
}

export default App