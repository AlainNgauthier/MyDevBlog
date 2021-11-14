import React from 'react';
import client from 'graphql/client';
import { useRouter } from 'next/dist/client/router';

import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';

export default function Places({ place }: PlacesTemplateProps) {

    const router = useRouter();

    if (router.isFallback) return null;

    return (
        <>
            <PlacesTemplate place={place} />           
        </>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { places } = await client.request<GetPlacesQuery>(GET_PLACES); //optional variable "first"

    const paths = places.map(({ slug }) => ({
        params: { slug }
    }))

    return {
        paths,
        fallback: true
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { place } = await client.request<GetPlaceBySlugQuery>(GET_PLACE_BY_SLUG, {
        slug: `${params?.slug}`
    })


    return {
        revalidate: 60,
        props: { 
            place
        }
    }
}

// function GET_PLACES_BY_SLUG<T>(GET_PLACES_BY_SLUG: any, arg1: { slug: string; }): { page: any; } | PromiseLike<{ page: any; }> {
//     throw new Error('Function not implemented.');
// }
