import React, { useState } from "react";

const ImageUpload = (props) => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Show preview
            props.actions.handleImageUpload(file); // Pass file to chatbot state
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && <img src={image} alt="Uploaded Preview" width="100px" />}
        </div>
    );
};

export default ImageUpload;
