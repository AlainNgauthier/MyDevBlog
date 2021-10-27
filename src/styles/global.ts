import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --highlight: #0AA438;
        --background: #000402;
        --white: #F5F8F6;

        --container: 100rem;

        --small: 1.6rem;
        --medium: 2.7rem;
        --large: 5rem;
        
        --small-mobile: 1rem;
        --medium-mobile: 2.1rem;
        --large-mobile: 4.3rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
        background: var(--background);
        // background: url("/img/background-home.jpg") no repeat center center fixed;
        color: var(--white);
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    p {
        font-size: 2rem;
        line-height: var(--medium);
    }

    a {
        color: var(--highlight);
    }
`

export default GlobalStyles;