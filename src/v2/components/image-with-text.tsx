import React from "react";

export const ImageWithText = ({image, text, styles}: ImageWithTextProps) => {
    return (
        <>
            <link rel="stylesheet" href="/styles/image-with-text.css"/>
            <div className={"container"}>
                <img src={image} alt="image" className={"stockImage"}/>
                <h1 className={"heading"}>{text}</h1>
            </div>
        </>
    )
}

type ImageWithTextProps = {
    image: string;
    text: string;
    isIsolated?: boolean;
    styles?: (path: string) => any;
}