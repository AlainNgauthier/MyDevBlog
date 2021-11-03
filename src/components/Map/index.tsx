import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';

type Place = {
    id: string
    name: string
    slug: string
    location: {
        latitude: number
        longitude: number
    }
}

export type MapProps = {
    places?: Place[],
}

export default function Map({ places }: MapProps) {
    const router = useRouter();

    return (
        <S.MapWrapper>
            <MapContainer 
                center={[0, 0]} 
                style={{ height: '100%', width: '100%'}}
                zoom={3}
                minZoom={3}
                maxBounds={[
                    [-180, 180],
                    [180, -180]
                ]}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {places?.map(({ id, name, slug, location}) => {
                    const { latitude, longitude } = location;

                    return (
                        <Marker 
                            key={`${id}`} 
                            position={[latitude, longitude]} 
                            title={name}
                            eventHandlers={{
                                click: () => {
                                    router.push(`/my-trips/${slug}`)
                                }
                            }}
                        />)
                })}
            </MapContainer>
        </S.MapWrapper>
    )
};


