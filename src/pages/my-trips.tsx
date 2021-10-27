import dynamic from 'next/dynamic';
import { InfoWithCircle } from '@styled-icons/entypo/InfoWithCircle';

const Map = dynamic(() => import('components/Map'), {ssr: false});


import AboutTemplate from 'templates/About';
import LinkWrapper from 'components/LinkWrapper';

const MyTrips = () => {
    return (
        <>
            <LinkWrapper href="/about">
                <InfoWithCircle size={26} />
            </LinkWrapper>
            <Map />
        </>
        // <AboutTemplate />
    )
};

export default MyTrips;