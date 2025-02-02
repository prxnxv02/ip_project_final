import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./components/Avatar";
import StartBtn from "./components/StartBtn";
import StartSlow from "./components/StartSlow";
import data from "./data";
import DisplayImage from "./components/DisplayImage";
import ImageUpload from "./components/ImageUpload"; // Import ImageUpload component

const config = {
    botName: "Our chatbot",
    initialMessages: [
        createChatBotMessage(`Welcome to ABC Advisor! Click "Let's Get Started" to continue.`, {
            widget: "startBtn"
        }),
        createChatBotMessage("You can also upload an image if needed.", {
            widget: "imageUpload"
        })
    ],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        checker: null,
        data,
        userImage: null, // Store uploaded image
        userData: {
            name: "",
            age: 0,
            category: "",
            product: {
                name: "",
                link: "",
                imageUrl: ""
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DisplayImage {...props} />,
        },
        {
            widgetName: "imageUpload",
            widgetFunc: (props) => <ImageUpload {...props} />, // Image upload widget
        },
    ],
};

export default config;
