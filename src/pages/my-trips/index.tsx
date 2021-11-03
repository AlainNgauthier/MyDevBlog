import dynamic from 'next/dynamic';
import { InfoWithCircle } from '@styled-icons/entypo/InfoWithCircle';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';
const Map = dynamic(() => import('components/Map'), {ssr: false});

export default function MyTrips({ places }: MapProps) {
    return (
        <>
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
        props: { 
            places,
        }
    }
}