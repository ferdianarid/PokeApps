import React, { useState } from 'react';
import { Container } from '../components/atoms/Container';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis'
import { AuthButtonAction } from '../components/organism/Form';
const Speech = () => {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();

    return (
        <React.Fragment>
            <Container style={{ maxWidth: "500px" }}>
                <textarea placeholder='Enter text' style={{ padding: "16px", resize: "none", borderRadius: "24px", border: "1px solid #6B8096" }} rows={5} cols={50} value={value} onChange={(event) => setValue(event.target.value)} />
                <AuthButtonAction onClick={() => speak({ text: value })}>Speak</AuthButtonAction>
            </Container>
        </React.Fragment>
    )
}

export default Speech