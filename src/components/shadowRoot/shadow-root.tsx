import React from "react";

export const ShadowRoot = ({children, styles, isIsolated}: any) => {
    const attachShadow = (host: any) => {
        if (host == null) {
            return;
        }

        const style = document.createElement('style');
        style.textContent = styles;
        host.appendChild(style);


        if (isIsolated) {
            host.attachShadow({mode: "open"});
            host.shadowRoot.innerHTML = host.innerHTML;
            host.innerHTML = "";
        }

    }

    return (
        <div ref={attachShadow}>{children}</div>
    )
}