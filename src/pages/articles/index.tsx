import ListArticlesTemplate, { ArticleProps } from 'templates/Articles';

import client from 'graphql/client';
import { GetArticlesQuery } from 'graphql/generated/graphql';
import { GET_ARTICLES } from 'graphql/queries';


export default function ListArticles({ articles }: ArticleProps)  {
    return (
        <>
            <ListArticlesTemplate articles={articles} />
        </>
    );
};

export const getStaticProps = async () => {
    const { articles } = await client.request<GetArticlesQuery>(GET_ARTICLES);

    return {
        props: { 
            articles,
        }
    }
}