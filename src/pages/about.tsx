import { NextSeo } from 'next-seo';

import AboutTemplate from 'templates/About';

export default function About() {
    return (
        <>
            <NextSeo 
                    title="My DevBlog - About my trips" 
                    description="A project to share all I want about everything, especially about technologies"
                    canonical="https://my-dev-blog.alaingauthier.com.br" 
            />
            <AboutTemplate />
        </>
    );
};