import React from "react";



export const ImageWithText = ({image, text, styles}: ImageWithTextProps) => {
    if (styles) {
        styles("/styles/image-with-text.css");
    }

    return (
        <div className={"container"}>
            <img src={image} alt="image" className={"stockImage"}/>
            <h1 className={"heading"}>{text}</h1>
        </div>
    )
}

type ImageWithTextProps = {
    image: string;
    text: string;
    isIsolated?: boolean;
    styles?: (path: string) => any;
}