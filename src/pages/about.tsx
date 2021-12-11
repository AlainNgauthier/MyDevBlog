import { NextSeo } from 'next-seo';

import AboutTemplate from 'templates/About';

export default function About() {
    return (
        <>
            <NextSeo 
                    title="O Blog d'Alain - About my trips" 
                    description="A project to share what I'm learn about technology, especially about web development"
                    canonical="https://www.alaingauthier.dev" 
            />
            <AboutTemplate />
        </>
    );
};