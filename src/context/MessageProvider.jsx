import { MessageContext } from './MessageContext';
import { useState } from 'react';
export const MessageProvider = ({ children }) => {

    const [question, setQuestion] = useState("Q");
    const [answer, setAnswer] = useState("A");
    const [inputText, setInputText] = useState("");
    const [secretText, setSecretText] = useState("");
    return (
        <MessageContext.Provider value={{question, setQuestion, answer, setAnswer, inputText, setInputText, secretText, setSecretText}}>
            {children}
            
        </MessageContext.Provider>
    );
};

