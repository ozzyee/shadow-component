import React from "react";

export const ShadowRoot = ({children, isIsolated}: any) => {
    const attachShadow = (host: any) => {
        if (host == null) {
            return;
        }

        // default styles
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/main.css';

        // bootstrap styles
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.type = 'text/css';
        bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';


        if (isIsolated) {
            host.attachShadow({mode: "open"});
            host.shadowRoot.innerHTML = host.innerHTML;
            host.innerHTML = "";
        }

        host.appendChild(link);
        host.appendChild(bootstrapLink);
    }

    return (
        <div ref={attachShadow}>{children}</div>
    )
}