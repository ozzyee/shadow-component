import React from "react";

export const ShadowRoot = ({children, styles, isIsolated}: any) => {
    const attachShadow = (host: any) => {
        if (host == null) {
            return;
        }

        if (isIsolated) {
            host.attachShadow({mode: "open"});
            host.shadowRoot.innerHTML = host.innerHTML;
            host.innerHTML = "";
        }


        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/main.css';
        host.appendChild(link);
    }

    return (
        <div ref={attachShadow}>{children}</div>
    )
}