import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Just type in your name to begin.');
        updateState(message, "age");
    };

    const afterNameMessage = () => {
        const message = createChatBotMessage("Let me know your age so I can suggest the best ride for you.");
        updateState(message, "preference");
    };

    const afterAgeMessage = () => {
        const message = createChatBotMessage("Do you lean towards a fast and thrilling ride or prefer a more relaxed and comfortable one?", {
            widget: "startSlow"
        });
        updateState(message);
    };

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on your age ${age} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
            widget: "finalImage"
        });
        updateState(message);
    };

    // ✅ Function to handle image uploads
    const handleImageUpload = (file) => {
        const message = createChatBotMessage("Succesfully image has uploaded!", {
            widget: "imageUpload"
        });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            userImage: file, // Store uploaded image in chatbot state
        }));
    };

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult,
                        handleImageUpload, // ✅ Added image upload functionality
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
