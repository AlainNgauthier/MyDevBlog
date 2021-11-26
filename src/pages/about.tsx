import { NextSeo } from 'next-seo';

import AboutTemplate from 'templates/About';

export default function About() {
    return (
        <>
            <NextSeo 
                    title="My DevBlog - About my trips" 
                    description="A project to share what I'm learn about technology, especially about web development"
                    canonical="https://my-dev-blog.alaingauthier.com.br" 
            />
            <AboutTemplate />
        </>
    );
};