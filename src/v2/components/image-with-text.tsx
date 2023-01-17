import React from "react";

export const ImageWithText = ({image, text, styles}: ImageWithTextProps) => {
    return (
        <>
            <link rel="stylesheet" href="/styles/image-with-text.css"/>
            <div className={"container"}>
                <img src={image} alt="image" className={"stockImage"}/>
                <h1 className={"heading"}>{text}</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                </div>
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