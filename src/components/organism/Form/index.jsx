import styled from "styled-components"

export const SignInForm = styled.div`
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 50px;
        grid-gap: 12px;
        border-radius: 24px;
        border: 2px solid ${({ theme }) => theme.togglerColor};
    `
export const SignUpForm = styled.div`
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 50px;
        grid-gap: 12px;
        border-radius: 24px;
        border: 2px solid ${({ theme }) => theme.togglerColor};
    `

export const Field = styled.input`
        padding: 16px 24px;
        width: 100%;
        font-size: 18px;
        color: ${({ theme }) => theme.text};
        border-radius: 12px;
        border: none;
        background: ${({ theme }) => theme.body};
        border: 2px solid ${({ theme }) => theme.togglerColor};
        &::placeholder {
            font-size: 16px;
        }
    `

export const Label = styled.p`
        font-weight: normal;
        font-size: 16px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.text};
    `

export const FormGroup = styled.div`
        margin: 32px 0;
        position: relative;
    `

export const AuthButtonAction = styled.button`
        font-size: 16px;
        font-weight: bold;
        padding: 16px 24px;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4f5eff;
        color: #FFF;
        border-radius: 12px;
        margin: 20px auto;
        transition: .2s ease-out;
        &:hover {
            cursor: pointer;
            background: #4150f2;
        }
    `