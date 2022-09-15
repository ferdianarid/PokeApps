import React from 'react'
import { Link } from 'react-router-dom'
import { OAuthButton } from '@/components/atoms/Button/OAuthButton'
import { Container } from '@/components/atoms/Container'
import { Heading, Subheading } from '@/components/atoms/Text'
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { Field, FormGroup, Label, AuthButtonAction, SignUpForm } from '@/components/organism/Form'

const SignUp = () => {
    const [typePassword, setTypePassword] = useState("password")
    const [passwordValue, setPasswordValue] = useState("")

    const HandlePasswordValue = event => {
        setPasswordValue(event.target.value)
    }

    const ShowPassword = () => {
        if (typePassword === "password") {
            setTypePassword("text")
            return;
        }
        setTypePassword("password")
    }

    return (
        <React.Fragment>
            <Container>
                <div className='text-center' style={{ margin: "0 auto" }}>
                    <Heading>Hi, Welcome Back !</Heading>
                    <Subheading style={{ margin: "0 auto", marginTop: "5px", marginBottom: "30px" }}>Please sign up first to access feature</Subheading>
                </div>
                <SignUpForm>
                    <div style={{ marginBottom: "20px" }}>
                        <Link to="/google" style={{ textDecoration: "none" }}>
                            <OAuthButton style={{ marginBottom: "12px", padding: "14px" }}><FaGoogle size={18} /> Sign Up with Google</OAuthButton>
                        </Link>
                        <Link to="/github" style={{ textDecoration: "none" }}>
                            <OAuthButton style={{ padding: "14px" }}><FaGithub size={18} /> Sign Up with Github</OAuthButton>
                        </Link>
                    </div>
                    <div className="linebreak"></div>
                    <FormGroup>
                        <Label>Username <span style={{ color: "red" }}>*</span> </Label>
                        <Field placeholder='Enter Username' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email Address <span style={{ color: "red" }}>*</span> </Label>
                        <Field placeholder='Enter Email Address' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password <span style={{ color: "red" }}>*</span> </Label>
                        <Field type={typePassword} value={passwordValue} onChange={HandlePasswordValue} placeholder='Enter Password' />
                        <div onClick={ShowPassword} style={{ position: "absolute", zIndex: 10, top: 48, right: 24 }}>
                            {typePassword === "password" ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                        </div>
                    </FormGroup>
                    <AuthButtonAction>Sign Up PokeApps</AuthButtonAction>
                </SignUpForm>
            </Container>
        </React.Fragment>
    )
}

export default SignUp