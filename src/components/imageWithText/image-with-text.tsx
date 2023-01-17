import React from "react";
import {ShadowRoot} from "../shadowRoot/shadow-root";

export const ImageWithText = ({image, text, isIsolated }: ImageWithTextProps) => {
    const styles = `
         .container {
            background-color: black !important;
            border-radius: 22px;
        }


        .stockImage {
            border-top-right-radius: 22px;
            border-top-left-radius: 22px;
        }

        .heading {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-align: center;
            color: white;
        }
    `

    return (
        <ShadowRoot styles={styles} isIsolated={isIsolated}>
            <div className={"container"}>
                <img src={image} alt="image" className={"stockImage"}/>
                <h1 className={"heading"}>{text}</h1>
            </div>
        </ShadowRoot>
    )
}

type ImageWithTextProps = {
    image: string;
    text: string;
    isIsolated?: boolean;
}

