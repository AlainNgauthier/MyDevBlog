import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { InfoWithCircle } from '@styled-icons/entypo/InfoWithCircle';
import { Home7 } from '@styled-icons/remix-fill/Home7';

import LinkWrapper from 'components/LinkWrapper';
import LinkHome from 'components/LinkWrapper/LinkHome';
import { MapProps } from 'components/Map';

import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';

const Map = dynamic(() => import('components/Map'), {ssr: false});

export default function MyTrips({ places }: MapProps) {
    return (
        <>
            <NextSeo 
                    title="My DevBlog - My Trips" 
                    description="A project to share what I'm learning about technology, especially about web development"
                    canonical="https://my-dev-blog.alaingauthier.com.br" 
            />
            <LinkHome href="/">
                <Home7 size={26} />
            </LinkHome>
            <LinkWrapper href="/about">
                <InfoWithCircle size={26} />
            </LinkWrapper>
            <Map places={places} />
        </>
    )
};

export const getStaticProps = async () => {
    const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

    return {
        revalidate: 60,
        props: { 
            places,
        }
    }
}