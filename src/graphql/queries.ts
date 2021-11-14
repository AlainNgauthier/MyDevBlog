import { gql } from 'graphql-request';

export const GET_PAGES = gql`
    query getPages($first: Int){
        pages(first: $first) {
            id
            heading
            slug
            body {
                html
            }
        }
    }
`;

export const GET_PAGE_BY_SLUG = gql`
    query getPageBySlug($slug: String!) {
        page(where: { slug: $slug }) {
            id
            heading
            slug
            body {
                html
            }
        }
    }
`;

export const GET_PLACES = gql`
    query getPlaces {
        places {
            id
            slug
            name
            location {
                latitude
                longitude
            }
            description {
                html
            }
            gallery {
                height
                width
                url
            }
        }
    }
`;

export const GET_PLACE_BY_SLUG = gql`
    query getPlaceBySlug($slug: String) {
        place(where: { slug: $slug }){
            id
            slug
            name
            location {
                latitude
                longitude
            }
            description {
                html
            }
            gallery {
                height
                width
                url
            }
        }
    }
`;

export const GET_ARTICLES = gql`
    query getArticles {
        articles {
            id
            slug
            title
            description
            category
        }
    }
`;

export const GET_ARTICLE_BY_SLUG = gql`
    query getArticleBySlug($slug: String) {
        article(where: { slug: $slug }){
            id
            slug
            title
            description
            category
            body {
                html
            }
        }
    }
`;