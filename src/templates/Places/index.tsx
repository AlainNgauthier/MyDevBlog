import React from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper";
import Slider from "components/Slider";
import * as S from './styles'; 

export type ImageProps = {
    url: string
    height: number
    width: number
};

export type PlacesTemplateProps = {
    place : {
        slug: string
        name: string
        description: {
            html: string
        }
        gallery: ImageProps[]
    }
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {

    return (
        <S.Wrapper>   
            <LinkWrapper href="/my-trips">
                <CloseOutline size={26} />
            </LinkWrapper>
            <S.Body>
                <S.BodyTitle>{place.name}</S.BodyTitle>
                <S.BodyDescription dangerouslySetInnerHTML={{ __html: place.description?.html }} />
                <S.Gallery>
                    <Slider place={place}  />
                </S.Gallery>
            </S.Body>
        </S.Wrapper>
    )
};