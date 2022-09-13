import React, { useEffect, useState } from 'react';
import { Container } from '../components/atoms/Container';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis'
import { AuthButtonAction } from '../components/organism/Form';
import { useLocation } from 'react-router-dom';

const Speech = () => {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();

    const location = useLocation()
    console.log(location)

    const AutoplaySpeak = () => {
        speak({ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus molestias omnis expedita ducimus! Commodi quidem necessitatibus aut autem tempore" })
        return;
    }
    useEffect(() => {
        if (location === '/speech') {
            AutoplaySpeak()
        }
    }, [location])
    return (
        <React.Fragment>
            <Container style={{ maxWidth: "500px" }}>
                <textarea placeholder='Enter text' style={{ padding: "16px", resize: "none", borderRadius: "24px", border: "1px solid #6B8096" }} rows={5} cols={50} value={value} onChange={(event) => setValue(event.target.value)} />
                <AuthButtonAction onClick={() => speak({ text: lorem })}>Speak</AuthButtonAction>
            </Container>
        </React.Fragment>
    )
}

export default Speech