import React from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper";
import * as S from './styles'; 

type ImageProps = {
    url: string
    height: number
    width: number
}

export type PlacesTemplateProps = {
    place : {
        slug: string
        name: string
        description: {
            html: string
        }
        gallery: ImageProps[]
    }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
    console.log(place);

    return (
        <S.Wrapper>   
            <LinkWrapper href="/my-trips">
                <CloseOutline size={26} />
            </LinkWrapper>
            <S.Body>
                <h1>{place.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
                <div>
                    {place.gallery.map((image, index) => (
                        <img key={index} src={image.url} alt={`imagens de ${place.name}`} />
                    ))}
                </div>
            </S.Body>
        </S.Wrapper>
    )
}