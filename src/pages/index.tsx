import dynamic from 'next/dynamic';
import { InfoWithCircle } from '@styled-icons/entypo/InfoWithCircle'

import Header from 'components/Header';
import LinkWrapper from 'components/LinkWrapper';

const Map = dynamic(() => import('components/Map'), {ssr: false});

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Map places={[
        {
          id: '1',
          name: 'Kinshasa',
          slug: 'kinshasa',
          location: {
            latitude: -4.371065424610839,
            longitude: 15.33770544232894
          }
        }]} 
      /> */}
      <LinkWrapper href="/about">
        <InfoWithCircle size={26} />
      </LinkWrapper>
      <Map />
    </>
  )
};
