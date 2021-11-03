import client from 'graphql/client';
import { useRouter } from 'next/dist/client/router';

import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';
import { GetStaticProps } from 'next';
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql';

export default function Page({ heading, body }: PageTemplateProps) {

    const router = useRouter();

    return (
        <>
            <PageTemplate heading={heading} body={body} />           
        </>
    )
};

export async function getStaticPaths() {
    const { pages } = await client.request<GetPagesQuery>(GET_PAGES); //optional variable "first"

    const paths = pages.map(({ slug }) => ({
        params: { slug }
    }))

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
        slug: `${params?.slug}`
    })


    /* This is not needed bc the fallback of getStaticPath is false */
    // if (!page) {
    //     return { 
    //         notFound: true,
    //     }
    // } 

    return {
        props: { 
            heading: page?.heading,
            body: page?.body?.html
        },
        revalidate: false
    }
}