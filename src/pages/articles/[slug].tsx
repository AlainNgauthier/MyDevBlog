import * as React from 'react';

import client from 'graphql/client';
import ArticlesItemsTemplate, { ArticlesItemsProps } from 'templates/Articles/ArticlesItem';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GET_ARTICLES, GET_ARTICLE_BY_SLUG } from 'graphql/queries';
import { GetArticleBySlugQuery, GetArticlesQuery } from 'graphql/generated/graphql';

export default function ArticlesItems({ article }: ArticlesItemsProps) {
    return (
        <>
            <ArticlesItemsTemplate article={article} />           
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { articles } = await client.request<GetArticlesQuery>(GET_ARTICLES);

    const paths = articles.map(({ slug }) => ({
        params: { slug }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { article } = await client.request<GetArticleBySlugQuery>(GET_ARTICLE_BY_SLUG, {
        slug: `${params?.slug}`
    });

    return {
        props: { 
            article
        }
    };
};

