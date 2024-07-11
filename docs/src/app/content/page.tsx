"use client"
// components/SpeechRecognitionComponent.js

import { useEffect, useState } from 'react';

const SpeechRecognitionComponent = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('word come here');

    const SpeechRecognition = SpeechRecognition ? SpeechRecognition : webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    const startListening = () => {
        recognition.start();
        document.getElementById("cognizer")!.innerText = 'Start speaking now';
    };

    const stopListening = () => {
        recognition.stop();
    };

    useEffect(() => {
        checkMicrophonePermission();
    }, []);

    const checkMicrophonePermission = async () => {
        try {
            console.log(recognition);
            // Permission already granted.
            return true;
        } catch (error) {
            // Permission denied or not yet granted.
            return false;
        }
    };

    recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
        const words = event.results[0][0].transcript;
        setTranscript(words);
        console.log(event);
    };

    recognition.onspeechend = () => {
        recognition.stop();
    };

    return (
        <div>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>
            <p id="cognizer">{transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;

