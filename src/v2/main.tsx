import {ShadowRoot} from "./components/shadow-root";
import {ImageWithText} from "./components/image-with-text";
import React from "react";

export class MainApp {

    static RenderComponent = () => {
        return (
            <ShadowRoot isIsolated={true}>
                <ImageWithText
                    image={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    text={"test image"}/>
            </ShadowRoot>
        )
    }
}
