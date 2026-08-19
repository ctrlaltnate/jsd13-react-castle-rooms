import { MessageContext } from './MessageContext';
import { useState } from 'react';

const isTurnOffCommand = (text) => {
    const command = text.trim().toLowerCase();
    return ['turn off', 'turnoff', 'off'].includes(command);
};

export const MessageProvider = ({ children }) => {

    const [question, setQuestion] = useState("Q");
    const [answer, setAnswer] = useState("A");
    const [inputText, setInputText] = useState("");
    const [secretText, setSecretText] = useState("");
    const isSecretRoomDark = isTurnOffCommand(inputText);
    const isOutsideDark = isTurnOffCommand(secretText);

    return (
        <MessageContext.Provider value={{
            question,
            setQuestion,
            answer,
            setAnswer,
            inputText,
            setInputText,
            secretText,
            setSecretText,
            isSecretRoomDark,
            isOutsideDark,
        }}>
            {children}
            
        </MessageContext.Provider>
    );
};

