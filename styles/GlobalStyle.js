"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --background-light: white;
        --foreground-light: black;
        --background-dark: black;
        --foreground-dark: white;
    }
    
    html.light {
        --background: var(--background-light);
        --foreground: var(--foreground-light);
    }
    
    html.dark {
        --background: var(--background-dark);
        --foreground: var(--foreground-dark);
    }
    
    body {
        background: var(--background);
        color: var(--foreground);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
